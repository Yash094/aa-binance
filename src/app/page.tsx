"use client";

import {
  ConnectButton,
} from "thirdweb/react";
import { client } from "./client";
import { defineChain,  } from "thirdweb";


// Main page component
export default function Home() {


  return (
    <main className="p-4 pb-10 min-h-[100vh] flex items-center justify-center container max-w-screen-lg mx-auto">
      <div className="py-20">
        <div className="flex flex-col items-center gap-6">
          <div className="flex gap-4">
            {/* Connect wallet button */}
            <ConnectButton
              client={client}
              accountAbstraction={{
                chain: defineChain(56),
                sponsorGas: true,
              }}
            />

          </div>
        </div>
      </div>
    </main>
  );
}
