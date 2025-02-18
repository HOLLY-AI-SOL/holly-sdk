// HollyAISDK.ts
export interface WhisperParams {
  pool_address?: string; // optional
  token_address?: string; // optional
  network: string; // required by your zod schema
}

export interface OneShotAnalysisResult {
  token: string;
  dex: string;
  whisper_score: {
    momentum_activity: number;
    social_activity: number;
    whisper_score: number;
    pumpfun_ca: boolean;
    raw_holders: number;
    volume_in_usd: number;
    market_cap_in_usd: number;
  };
  timestamp: string;
}

export default class HollyAISDK {
  public apiKey: string;

  public core: {
    whisper: (params: WhisperParams) => Promise<OneShotAnalysisResult>;
  };

  public utils: {
    anything: () => void;
  };

  private baseUrl: string;

  constructor(apiKey: string, baseUrl: string) {
    this.apiKey = apiKey;
    this.baseUrl = baseUrl;

    this.core = {
      whisper: async (
        params: WhisperParams,
      ): Promise<OneShotAnalysisResult> => {
        const endpoint = `${this.baseUrl}/whisper`;

        const response = await fetch(endpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'x-api-key': this.apiKey,
          },
          body: JSON.stringify(params),
        });

        if (!response.ok) {
          throw new Error(
            `Failed to whisper: ${response.status} ${response.statusText}`,
          );
        }

        const data = await response.json();
        // data should match OneShotAnalysisResult shape
        return data;
      },
    };

    // Implement any "utils" methods
    this.utils = {
      anything: () => {
        console.log('Called utils.anything()');
      },
    };
  }
}
