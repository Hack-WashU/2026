// 2026 Fall Build Challenge —— 活动信息的唯一来源。
// 首页弹窗（FlyerPopup.vue）和赞助页的 Upcoming 卡片（SponsorLanding.vue）都读这里，
// 换报名链接或改日期只需要动这一个文件。

// 官方报名表单：HackWashU AI Build Challenge 2026 Registration
export const RSVP_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSchGkPDYyQ9BUmkwRkz_gxDGl-cCWSH4SkZkbktQNwuZGX4AA/viewform";

// 活动结束后，弹窗和 Upcoming 卡片都会自动下线
export const EVENT_ENDS_AT = "2026-09-27T23:59:59";

export const fallBuildChallenge = {
  title: "Fall Build Challenge",
  season: "Sep 25–27, 2026",
  venue: "Lopata Hall",
  description:
    "A 48-hour build challenge during AI Perspectives Week, open to all majors and experience levels. Students form teams on site, build with mentorship and office hours, and demo to judges on Sunday.",
  facts: ["48-hour hackathon", "Lopata Hall", "All majors welcome"],
  tags: ["DI2 Accelerator", "Skandalaris Center", "Bauer Leaders Academy"],
};

export function eventHasEnded() {
  return Date.now() > new Date(EVENT_ENDS_AT).getTime();
}
