import React from "react";

const SocialStreams = () => {
  return (
    <div className="w-full h-screen ">
      <h1 className="font-semibold text-4xl text-center mt-8 decoration-4 underline underline-offset-[12px] decoration-[#F5821F] ">
        <span className="text-[#F5821F]">Social</span>
        <span> Streams</span>
      </h1>
      <div className="flex gap-4 px-4 mt-[55px] ">
        <div className="w-[33%] h-[535px] border-[1px] rounded-md border-gray-700 overflow-hidden shadow-lg ">
          <div className="w-full h-[45px] bg-[#F5821F]">
            <h1 className="text-white font-semibold text-md px-3 pt-2.5 ">
              Social Videos
            </h1>
          </div>
          <div className="overflow-y-auto h-[490px]">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/Ds94q_dDxNU?list=PL8Z1OKiWzyBFA6tqYX9WsHnsnG_5Jc-uu"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-lg shadow-lg w-[420px] h-[250px] my-2 "
              />

            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/KouCsihUXvI?list=PL8Z1OKiWzyBFA6tqYX9WsHnsnG_5Jc-uu&index=2"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
              className="rounded-lg shadow-lg w-[420px] h-[250px] my-2"
              />

            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/zAyTt7ldQCA?list=PL8Z1OKiWzyBFP8kF7jSOip4GTHrdvqHQ4"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
              className="rounded-lg shadow-lg w-[420px] h-[250px] my-2"
              />

            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/9rrYrgWRB-Y?list=PL8Z1OKiWzyBFP8kF7jSOip4GTHrdvqHQ4&index=10"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
              className="rounded-lg shadow-lg w-[420px] h-[250px] my-2"
              />

            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/ubqEn2Ykexo?list=PL8Z1OKiWzyBFeLnXnW5vcZuUAnZKUV4lF"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
              className="rounded-lg shadow-lg w-[420px] h-[250px]my-2 "
            />
          </div>
        </div>
        <div className="w-[33%] h-[535px] border-[1px] rounded-md border-gray-700 overflow-hidden shadow-lg">
          <div className="w-full h-[45px] bg-[#F5821F]">
            <h1 className="text-white font-semibold text-md px-3 pt-2.5 ">
              Twitter Feed
            </h1>
          </div>
          <div>
            <iframe
              id="twitter-widget-0"
              scrolling="yes"
              frameBorder="0"
              allowTransparency="true"
              allowFullScreen="true"
              title="Twitter Timeline"
              src="https://syndication.twitter.com/srv/timeline-profile/screen-name/BJP4India?dnt=false&embedId=twitter-widget-0&features=eyJ0ZndfdGltZWxpbmVfbGlzdCI6eyJidWNrZXQiOltdLCJ2ZXJzaW9uIjpudWxsfSwidGZ3X2ZvbGxvd2VyX2NvdW50X3N1bnNldCI6eyJidWNrZXQiOnRydWUsInZlcnNpb24iOm51bGx9LCJ0ZndfdHdlZXRfZWRpdF9iYWNrZW5kIjp7ImJ1Y2tldCI6Im9uIiwidmVyc2lvbiI6bnVsbH0sInRmd19yZWZzcmNfc2Vzc2lvbiI6eyJidWNrZXQiOiJvbiIsInZlcnNpb24iOm51bGx9LCJ0ZndfZm9zbnJfc29mdF9pbnRlcnZlbnRpb25zX2VuYWJsZWQiOnsiYnVja2V0Ijoib24iLCJ2ZXJzaW9uIjpudWxsfSwidGZ3X21peGVkX21lZGlhXzE1ODk3Ijp7ImJ1Y2tldCI6InRyZWF0bWVudCIsInZlcnNpb24iOm51bGx9LCJ0ZndfZXhwZXJpbWVudHNfY29va2llX2V4cGlyYXRpb24iOnsiYnVja2V0IjoxMjA5NjAwLCJ2ZXJzaW9uIjpudWxsfSwidGZ3X3Nob3dfYmlyZHdhdGNoX3Bpdm90c19lbmFibGVkIjp7ImJ1Y2tldCI6Im9uIiwidmVyc2lvbiI6bnVsbH0sInRmd19kdXBsaWNhdGVfc2NyaWJlc190b19zZXR0aW5ncyI6eyJidWNrZXQiOiJvbiIsInZlcnNpb24iOm51bGx9LCJ0ZndfdXNlX3Byb2ZpbGVfaW1hZ2Vfc2hhcGVfZW5hYmxlZCI6eyJidWNrZXQiOiJvbiIsInZlcnNpb24iOm51bGx9LCJ0ZndfdmlkZW9faGxzX2R5bmFtaWNfbWFuaWZlc3RzXzE1MDgyIjp7ImJ1Y2tldCI6InRydWVfYml0cmF0ZSIsInZlcnNpb24iOm51bGx9LCJ0ZndfbGVnYWN5X3RpbWVsaW5lX3N1bnNldCI6eyJidWNrZXQiOnRydWUsInZlcnNpb24iOm51bGx9LCJ0ZndfdHdlZXRfZWRpdF9mcm9udGVuZCI6eyJidWNrZXQiOiJvbiIsInZlcnNpb24iOm51bGx9fQ%3D%3D&frame=false&hideBorder=false&hideFooter=false&hideHeader=false&hideScrollBar=false&lang=en&origin=https%3A%2F%2Ftestpublic.ashutoshtech.com%2F%23timeline-events&sessionId=42b92da6c650655f2cf18777a87644bdb59b513d&showHeader=true&showReplies=false&transparent=false&widgetsVersion=2615f7e52b7e0%3A1702314776716"
              style={{ width: "435px", height: "800px", display: "block" }}
              className="border-0"
            />
          </div>
        </div>
        <div className="w-[33%] h-[535px] border-[1px] rounded-md border-gray-700 overflow-hidden shadow-lg">
          <div className="w-full h-[45px] bg-[#F5821F]">
            <h1 className="text-white font-semibold text-md px-3 pt-2.5 ">
              Instagram Feed
            </h1>
            <div>
              <iframe
                className="instagram-media instagram-media-rendered"
                id="instagram-embed-0"
                src="https://www.instagram.com/bjp4india/embed"
                allowTransparency="true"
                allowFullScreen="true"
                frameBorder="0"
                height="481" // can be adjusted as needed
                data-instgrm-payload-id="instagram-media-payload-0"
                scrolling="no"
                style={{
                  backgroundColor: "white",
                  borderRadius: "10px",
                  border: "1px solid rgb(219, 219, 219)",
                  boxShadow: "none",
                  display: "block",
                  margin: "12px 0px 12px",
                  width: "437px",
                  padding: "0px",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialStreams;
