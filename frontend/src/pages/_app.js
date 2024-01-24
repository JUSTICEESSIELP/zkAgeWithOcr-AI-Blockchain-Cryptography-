import "@/styles/globals.css";
import { useState } from "react";
import Link from "next/link";

import { createWeb3Modal, defaultWagmiConfig } from "@web3modal/wagmi1/react";

import { WagmiConfig } from "wagmi";
import { arbitrum, mainnet, sepolia } from "viem/chains";

// 1. Get projectId at https://cloud.walletconnect.com
const projectId = "504e1656348e91864e3a7bffe92b301b";

// 2. Create wagmiConfig
const metadata = {
  name: "Web3Modal",
  description: "Web3Modal Example",
  url: "https://web3modal.com",
  icons: ["https://avatars.githubusercontent.com/u/37784886"],
};

const chains = [mainnet, arbitrum, sepolia];
const wagmiConfig = defaultWagmiConfig({ chains, projectId, metadata });

// 3. Create modal

createWeb3Modal({ wagmiConfig, projectId, chains });

export default function App({ Component, pageProps }) {
  
  return <Component {...pageProps} />;
}
