import { chromium } from "playwright";
import { pathToFileURL } from "node:url";

const htmlPath = "/workspace/.grok/og-card.html";
const outPng = "/workspace/.grok/og-raw.png";

const browser = await chromium.launch({ args: ["--font-render-hinting=none"] });
const page = await browser.newPage({
  viewport: { width: 1200, height: 630 },
  deviceScaleFactor: 2,
});
await page.goto(pathToFileURL(htmlPath).href, { waitUntil: "networkidle", timeout: 30_000 });
await page.evaluate(() => document.fonts.ready);
await page.waitForTimeout(400);
await page.screenshot({ path: outPng, type: "png", omitBackground: false });
const box = await page.locator(".title").boundingBox();
console.log(JSON.stringify({ png: outPng, titleBox: box, viewport: { w: 1200, h: 630, dpr: 2 } }));
await browser.close();
