const cryptoCFDs = [
  {
    title: "Bitcoin CFD",
    icon: "🟠",
    description:
      "The first and largest cryptocurrency, Bitcoin paved the way for hundreds of similar currencies and boasts a market cap of over $100 billion."
  },
  {
    title: "Ethereum CFD",
    icon: "🟡",
    description:
      "The world's second-largest cryptocurrency, it is labelled by many as the 'next Bitcoin'. Ethereum has received international recognition and support from giant organisations such as Microsoft, JP Morgan, and Intel."
  },
  {
    title: "Dash CFD",
    icon: "🔵",
    description:
      "Dash's focus is on instant transactions and owner privacy. Dash has an infrastructure that enables much faster transactions than other cryptocurrencies and therefore displays higher liquidity than many of its counterparts."
  },
  {
    title: "Litecoin CFD",
    icon: "⚪",
    description:
      "Designed by a former Google engineer to improve upon Bitcoin's technology, Litecoin offers quicker processing times and a larger number of tokens."
  },
  {
    title: "Bitcoin Cash CFD",
    icon: "🟠",
    description:
      "Bitcoin Cash resulted from a hard fork of the Bitcoin blockchain. It increased block size from 1 megabyte to 8 megabytes without incorporating SegWit."
  },
  {
    title: "Ripple CFD",
    icon: "🔷",
    description:
      "Ripple is both a transaction network and crypto token which was created in 2012 as the go-to cryptocurrency for banks and global money transfers."
  },
  {
    title: "Emercoin CFD",
    icon: "🟡",
    description:
      "Emercoin is an open-source cryptocurrency originating from Bitcoin, Peercoin and Namecoin. It is also a platform for secure distributed blockchain business services."
  },
  {
    title: "NameCoin CFD",
    icon: "🔵",
    description:
      "Namecoin is a blockchain protocol that serves as a naming system. Since Namecoin is a fork of Bitcoin, it can also be used for peer-to-peer transactions."
  },
  {
    title: "PeerCoin CFD",
    icon: "🟢",
    description:
      "PeerCoin aims to solve the inefficiency problem of Proof-of-Work by using its own Proof-of-Stake system."
  },
  {
    title: "Polkadot CFD",
    icon: "⚫",
    description:
      "Polkadot allows diverse blockchains to transfer messages securely. It is a scalable, heterogeneous, multi-chain technology."
  },
  {
    title: "Stellar CFD",
    icon: "🔵",
    description:
      "Stellar is an open-source decentralized protocol for digital currency to fiat money transfers enabling cross-border transactions."
  },
  {
    title: "Chainlink CFD",
    icon: "🔷",
    description:
      "Chainlink is a decentralized oracle network providing reliable data to blockchains and decentralized finance applications."
  },
  {
    title: "Dogecoin CFD",
    icon: "🟡",
    description:
      "Dogecoin was founded as a payment system and began as a meme coin, now widely used and popular among traders."
  },
  {
    title: "Tezos CFD",
    icon: "🔵",
    description:
      "Tezos is a decentralized Proof-of-Stake blockchain network that supports peer-to-peer transactions and smart contracts."
  },
  {
    title: "Uniswap CFD",
    icon: "🟣",
    description:
      "Uniswap enables automated cryptocurrency transactions between tokens on the Ethereum blockchain through smart contracts."
  },
  {
    title: "Cardano CFD",
    icon: "🔵",
    description:
      "Cardano is an open-source blockchain platform enabling peer-to-peer transactions with a Proof-of-Stake consensus."
  },
  {
    title: "Binance Coin CFD",
    icon: "🟡",
    description:
      "Binance Coin was initially formed as a utility token for reduced trading fees and is now used across many services."
  },
  {
    title: "Avalanche CFD",
    icon: "🔺",
    description:
      "Avalanche is an open-source Proof-of-Stake blockchain platform designed for high transaction processing speed."
  },
  {
    title: "Luna CFD",
    icon: "🌙",
    description:
      "One of the native tokens of the Terra network used to mint stablecoins and maintain price stability."
  },
  {
    title: "Polygon Matic CFD",
    icon: "🟣",
    description:
      "Polygon is used to connect and scale Ethereum-compatible blockchain networks using a modified Proof-of-Stake mechanism."
  },
  {
    title: "Moonbeam CFD",
    icon: "🌕",
    description:
      "Moonbeam is an Ethereum-compatible smart contract platform built on Polkadot, supporting Solidity projects."
  },
  {
    title: "Kusama CFD",
    icon: "🦅",
    description:
      "Kusama is a scalable network for testing and deploying early-stage blockchain projects in the Polkadot ecosystem."
  }
];

const CryptoCFDsGrid = () => {
  return (
    <section className="bg-gray-50 py-20 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {cryptoCFDs.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition"
          >
            <div className="text-4xl mb-4">{item.icon}</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              {item.title}
            </h3>
            <p className="text-gray-600 leading-relaxed text-sm">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CryptoCFDsGrid;
