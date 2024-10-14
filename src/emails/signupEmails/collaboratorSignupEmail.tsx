import { Tailwind, Html, Img, Head, Preview } from "@react-email/components";
import * as React from "react";

type CollaboratorEmailProps = {
  firstName: string;
  betaTester?: boolean;
  referralPartner?: boolean;
  referralCode?: string;
};

export default function CollaboratorSignupEmail({
  firstName = "testName",
  betaTester,
  referralPartner,
  referralCode,
}: CollaboratorEmailProps) {
  const baseUrl = "http://straightforwardjobsite.com";
  return (
    <Html>
      <Tailwind
        config={{
          theme: {
            fontFamily: {
              sans: ["satoshi", "sans-serif"],
              serif: ["courier", "serif"],
              helv: ["helvetica", "sans-serif"],
            },
            extend: {
              colors: {
                jade: "#50B09F",
                olive: "#A6A646",
                eggshell: "#FFF9F3",
                cream: "#F8F2EC",
                apricot: "#FDA26B",
                midnight: "#308B7B",
                watermelon: "#FFABDA",
                magenta: "#E673A9",
              },

              letterSpacing: {
                superwide: "0.15em",
              },
            },
          },
          plugins: [require("@mertasan/tailwindcss-variables")],
        }}
      >
        <body className="Email h-[100%] gap-12 bg-cream pb-40 font-sans font-semibold tracking-widest text-midnight">
          <Preview>Welcome to Straightforward Job Site {firstName}!</Preview>
          <Head>
            <Img
              src={`${baseUrl}/sfjs-logo.png`}
              width="153"
              height="50"
              alt="straightforward job site"
              className="Email Header px-10 py-10"
            />
          </Head>
          <section className="EmailBody mb-8 px-[15%] py-[5%] text-left text-[1rem] leading-relaxed">
            <p className="EmailInfo text-jade">Hello there {firstName}!</p>
            <p className="EmailInfo">
              {`You've been  added to the list of potential collaborators for Straightforward
              Job Site!`}
            </p>

            {betaTester && (
              <p className="EmailInfo mt-12 text-olive">{`Since you've signed up to be a beta tester, we'll let you know when our MVP is ready for testing!`}</p>
            )}
            {referralPartner && (
              <div className="EmailInfo mt-12 text-end italic text-jade">
                {" "}
                {`You've also expressed interest in being a referral partner with us! We've got some details we'll send along in an email shortly. For now, you can `}
                <a
                  href="https://cal.com/jacobsf"
                  className="Link text-jade underline"
                >
                  click here
                </a>
                {` to schedule a 15 minute meeting with Jacob where you'll go over details + activate your referral code!`}
              </div>
            )}

            <p className="EmailInfo mt-12 text-end text-olive">
              {`We will be using this list to find people to partner with in the future. We'll be sure to let you know if your skillset + ideas align with our needs!`}
            </p>
            <p className="EmailInfo mt-12 text-jade">
              {`Thank you for your time and we hope to chat with you soon!✨`}
            </p>
            {/* betaTester info goes here */}
            <p className="EmailInfo mt-12 text-end italic text-midnight">
              {`If you have any questions or want to get in touch with our Founders, you can contact Jenny & Jacob by responding to this email!`}
            </p>
            <p className="EmailInfo mt-20 text-end text-sm italic tracking-superwide text-olive">
              - the makers of straightforward job site
            </p>
          </section>
        </body>
      </Tailwind>
    </Html>
  );
}
