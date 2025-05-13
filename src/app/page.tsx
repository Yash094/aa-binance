"use client";

import {
  ConnectButton,
  TransactionButton,
} from "thirdweb/react";
import { client } from "./client";
import { avalancheFuji } from "thirdweb/chains";
import { getContract, prepareContractCall, toWei } from "thirdweb";
import { inAppWallet } from "thirdweb/wallets";



export default function Home() {
  const contract = getContract({
    client,
    chain: avalancheFuji,
    address: "0xfa723da21975aB2EABf6F2f560Fa18f8fa97401E",
  })
  const wallet = inAppWallet({
    auth: {
      mode: "redirect",
      options: ["google", "apple", "facebook", "discord", "line", "x", "coinbase", "farcaster", "telegram", "github", "twitch", "steam", "guest", "backend", "email", "phone", "passkey", "wallet"]
    },
  });

  return (
    <main className="p-4 pb-10 min-h-[100vh] flex items-center justify-center container max-w-screen-lg mx-auto">
      <div className="py-20">
        <div className="flex flex-col items-center gap-6">
          <div className="flex gap-4">
            <ConnectButton
              client={client}
              wallets={[wallet]}
            
            />

          </div>


        </div>
      </div>
    </main>
  );
}
