export interface AssetManifest {
  logoIcon: string | null;
  logoFull: string | null;
  favicon: string | null;
  marqueeLogos: Record<string, string | null>;
  projectImages: Record<string, string | null>;
  serviceImages: Record<string, string | null>;
}

// Replace a null with a public file path when the owner supplies that asset.
export const assets: AssetManifest = {
  logoIcon: null,
  logoFull: null,
  favicon: null,
  marqueeLogos: {},
  projectImages: {},
  serviceImages: {},
};
