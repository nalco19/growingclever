import { defineCloudflareConfig } from "@opennextjs/cloudflare";

// The site is fully prerendered with no ISR, no revalidation and no
// next/image, so none of the cache or image overrides are needed.
export default defineCloudflareConfig();
