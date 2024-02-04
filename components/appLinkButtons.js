import Link from "next/link";

export default function typeButtonDiv() {
  return (
    <div name="storeLinks" className="storeLinksDiv">
      <Link href="https://play.google.com/store/apps/details?id=com.details_reactnative&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1">
        <img
          className="storeButtons"
          alt="Get it on Google Play"
          src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
        />
      </Link>
      <Link href="https://apps.apple.com/us/app/details-the-game/id6449182298?itsct=apps_box_badge&amp;itscg=30200">
        <img
          className="appleImgLinkCSS"
          src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us?size=250x83&amp;releaseDate=1684713600"
          alt="Download on the App Store"
        />
      </Link>
      <style jsx>{`
        .storeLinksDiv {
          padding: 8px;
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
          margin-vertical: 20px;
        }
        .storeButtons {
          width: 250px;
        }
        .appleImgLinkCSS {
          border-radius: 13px;
          width: 222px;
          padding: 12px;
          //height: 70px;
        }
      `}</style>
    </div>
  );
}
