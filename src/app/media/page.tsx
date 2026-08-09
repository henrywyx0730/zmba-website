import type { Metadata } from "next";
import Image from "next/image";
import { PageIntro } from "@/components/page-intro";
import { publicMedia, zmbaContent } from "@/content/zmba";

export const metadata: Metadata = {
  title: "Media",
  alternates: { canonical: "/media" },
};

const formatShortDate = (value: string) =>
  new Intl.DateTimeFormat("en", {
    day: "2-digit",
    month: "2-digit",
    year: "2-digit",
    timeZone: "UTC",
  }).format(new Date(`${value}T00:00:00Z`));

export default function MediaPage() {
  return (
    <>
      <PageIntro
        label="Media"
        title="Photographs and posters from the court."
        body="Selected real ZMBA material is grouped by verified date. Captions stay neutral when the event context is incomplete."
      />

      <section className="media-gallery content-width">
        {publicMedia.map((asset, index) => {
          const season = zmbaContent.seasons.find((item) => item.id === asset.seasonId);

          return (
            <figure className={`media-item media-item-${(index % 5) + 1}`} key={asset.id}>
              <div className="media-image">
                <Image
                  src={asset.publicPath}
                  alt={asset.alt}
                  width={asset.width}
                  height={asset.height}
                  priority={index === 0}
                  sizes="(max-width: 767px) 100vw, (max-width: 1100px) 50vw, 42vw"
                />
              </div>
              <figcaption>
                <time dateTime={asset.date}>{formatShortDate(asset.date)}</time>
                <span>{season?.label}</span>
                {asset.kind === "video-still" ? <span>Video still</span> : null}
                {asset.kind === "poster-page" ? <span>Poster</span> : null}
              </figcaption>
            </figure>
          );
        })}
      </section>
    </>
  );
}
