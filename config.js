import themes from "daisyui/src/theming/themes";

const config = {
  // REQUIRED
  appName: "Bedrock Construction",
  // REQUIRED: a short description of your app for SEO tags (can be overwritten)
  appDescription:
    "Professional construction services including concrete, stone, decks, and landscaping. Quality craftsmanship you can trust.",
  // REQUIRED (no https://, not trialing slash at the end, just the naked domain)
  domainName: "bedrockconstructionnb.com",
  crisp: {
    // Crisp website ID. IF YOU DON'T USE CRISP: just remove this => Then add a support email in this config file (resend.supportEmail) otherwise customer support won't work.
    id: "",
    // Hide Crisp by default, except on route "/". Crisp is toggled with <ButtonSupport/>. If you want to show Crisp on every routes, just remove this below
    onlyShowOnRoutes: ["/"],
  },
  stripe: {
    // Create multiple plans in your Stripe dashboard, then add them here. You can add as many plans as you want, just make sure to add the priceId
    plans: [
      {
        // REQUIRED — we use this to find the plan in the webhook (for instance if you want to update the user's credits based on the plan)
        priceId:
          process.env.NODE_ENV === "development"
            ? "price_1Niyy5AxyNprDp7iZIqEyD2h"
            : "price_456",
        //  REQUIRED - Name of the plan, displayed on the pricing page
        name: "Concrete Services",
        // A friendly description of the plan, displayed on the pricing page. Tip: explain why this plan and not others
        description: "Professional concrete installation and repair",
        // The price you want to display, the one user will be charged on Stripe.
        price: 2500,
        // If you have an anchor price (i.e. $29) that you want to display crossed out, put it here. Otherwise, leave it empty
        priceAnchor: 3000,
        features: [
          {
            name: "Driveways & Walkways",
          },
          { name: "Foundation Work" },
          { name: "Patios & Slabs" },
          { name: "Decorative Concrete" },
          { name: "Concrete Repair" },
        ],
      },
      {
        // This plan will look different on the pricing page, it will be highlighted. You can only have one plan with isFeatured: true
        isFeatured: true,
        priceId:
          process.env.NODE_ENV === "development"
            ? "price_1O5KtcAxyNprDp7iftKnrrpw"
            : "price_456",
        name: "Stone & Masonry",
        description: "Expert stone and masonry work",
        price: 3500,
        priceAnchor: 4200,
        features: [
          {
            name: "Stone Walls & Retaining Walls",
          },
          { name: "Natural Stone Installation" },
          { name: "Brick Work" },
          { name: "Stone Veneer" },
          { name: "Chimney Repair" },
          { name: "Custom Stone Features" },
        ],
      },
      {
        priceId:
          process.env.NODE_ENV === "development"
            ? "price_1O5KtcAxyNprDp7iftKnrrpw"
            : "price_456",
        name: "Decks & Landscaping",
        description: "Complete outdoor living solutions",
        price: 4500,
        priceAnchor: 5500,
        features: [
          {
            name: "Custom Deck Construction",
          },
          { name: "Landscape Design" },
          { name: "Hardscaping" },
          { name: "Outdoor Living Spaces" },
          { name: "Drainage Solutions" },
          { name: "Site Preparation" },
        ],
      },
    ],
  },
  aws: {
    // If you use AWS S3/Cloudfront, put values in here
    bucket: "bucket-name",
    bucketUrl: `https://bucket-name.s3.amazonaws.com/`,
    cdn: "https://cdn-id.cloudfront.net/",
  },
  resend: {
    // REQUIRED — Email 'From' field to be used when sending magic login links
    fromNoReply: `Bedrock Construction <noreply@bedrockconstructionnb.com>`,
    // REQUIRED — Email 'From' field to be used when sending other emails, like abandoned carts, updates etc..
    fromAdmin: `Bedrock Construction Team <team@bedrockconstructionnb.com>`,
    // Email shown to customer if need support. Leave empty if not needed => if empty, set up Crisp above, otherwise you won't be able to offer customer support."
    supportEmail: "BedrockConstruction506@gmail.com",
  },
  contact: {
    phone1: "506-440-7538",
    phone2: "506-471-4990", 
    email: "BedrockConstruction506@gmail.com"
  },
  colors: {
    // REQUIRED — The DaisyUI theme to use (added to the main layout.js). Leave blank for default (light & dark mode). If you any other theme than light/dark, you need to add it in config.tailwind.js in daisyui.themes.
    theme: "light",
    // REQUIRED — This color will be reflected on the whole app outside of the document (loading bar, Chrome tabs, etc..). By default it takes the primary color from your DaisyUI theme (make sure to update your the theme name after "data-theme=")
    // OR you can just do this to use a custom color: main: "#f37055". HEX only.
    main: "#ffffff",
  },
  auth: {
    // REQUIRED — the path to log in users. It's use to protect private routes (like /dashboard). It's used in apiClient (/libs/api.js) upon 401 errors from our API
    loginUrl: "/api/auth/signin",
    // REQUIRED — the path you want to redirect users after successfull login (i.e. /dashboard, /private). This is normally a private page for users to manage their accounts. It's used in apiClient (/libs/api.js) upon 401 errors from our API & in ButtonSignin.js
    callbackUrl: "/dashboard",
  },
};

export default config;
