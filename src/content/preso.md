## Angular, the blockchain, and you

---

<!-- .slide: data-background-image="content/images/breakfast.jpg" -->

## First, a quick thank you

---

<!-- .slide: class="white" data-background="#17BEBB" -->
## Who am I?

---
<!-- .slide: class="white" data-background="#2E282A" -->
## Ari Lerner

* [ng-book 2](https://www.ng-book.com/2)
* [fullstackreact](https://fullstackreact.com)

---

## This talk is

### theory
### code

---

<!-- .slide: class="white" data-background-image="http://gifs.joelglovier.com/big-lebowski/what.gif" -->

## Why Blockchain at an Angular conference?

---

<!-- .slide: class="on-dark" data-background-image="https://media.giphy.com/media/cvBvEztMAMd9u/giphy.gif" -->

## Revolution begets revolution

[Will Blockchain(s) Eat the Marketplace Stack?](https://medium.com/point-nine-news/will-blockchain-s-eat-the-marketplace-stack-cf5952889aa0)
[How The Blockchain Will Transform Everything From Banking To Government To Our Identities](https://www.forbes.com/sites/laurashin/2016/05/26/how-the-blockchain-will-transform-everything-from-banking-to-government-to-our-identities/#1d076c0e558e)
[How blockchains could change the world](http://www.mckinsey.com/industries/high-tech/our-insights/how-blockchains-could-change-the-world)

---

## So what are we doing?

---

### Building our **own cryptocurrency** and **visualize** it with Angular

---

DEMO

---

<!-- .slide: class="white" data-background="#76B041" -->
## Have you heard of crytpocurrencies like Bitcoin?

---

<!-- .slide: class="on-dark" data-background-image="https://media.giphy.com/media/CGRGrltfvcd5C/giphy.gif" -->

Bitcoin is a currency that is completely distributed and doesn't require a central authority to transfer wealth (like a bank)!

---

And the blockchain is... the thing that enables this flow.

---

<!-- .slide: class="white" data-background="#76B041" -->
## Have you heard of the blockchain?

---

## Bitcoin is **powered** by the Blockchain

---

## What is the blockchain?

---

<!-- .slide: class="white" data-background="#E4572E" -->
The blockchain is just a publicly available

## ordered ledger of facts

---

<!-- .slide: class="on-dark" data-background-image="http://gifs.joelglovier.com/bored/bored-joe-macmillan.gif" -->

... that is cleverly distributed across a peer-to-peer network of untrusted nodes around the world, that attempts to solve difficult computer science problems such as reconciliation and distributed consensus.

---

## Why?

---

## We can run a worldwide, trusted network of computers

Without a central authority (or even a hosting company)

---

### How does it work?

(aka, let's peek under the hood)

---

## Three features

<ul>
<li class="fragment" data-autoslide="1000">distributed in a p2p network</li>
<li class="fragment" data-autoslide="1000">incentivize untrusted nodes</li>
<li class="fragment">consensus (getting everyone to agree)</li>
</ul>

---

<!-- .slide: class="white" data-background="#E4572E" -->
## Distributed in a p2p network

---

<video data-autoplay src="content/videos/distributed.mov"></video>

---

<!-- .slide: class="on-dark" data-background-image="https://media.giphy.com/media/l1IY0geomfz09dEB2/giphy.gif" -->
## We need a way to confirm interactions in a proveable way on unstrustworthy nodes

---

## Before we get there, let's talk about **hashes**

---

## A hash is a function that can be used to map data of arbitrary size to data of fixed size.

---

* Any input -> Same-length output
* unique identification
* One-way (can't de-hash a hash)

---

## Allows us to quickly prove data is real

---

## So what does a hash look like?

---

<!-- .slide: data-state="hashes" -->
<div id="output"></div>

---

Hashes look familiar, eh? You've worked with merkle trees before if you've ever used

---

## Git

---

<!-- .slide: class="on-dark" data-background-image="http://gifs.joelglovier.com/excited/bill-murray-toast.gif" -->

Now you know blockchain! Not too difficult, eh?

---

## Why do we use hashes?

---

## Merkle tree

A _very_ peculiar data-structure indeed.

---

A Merkle tree refers to a way to store and hash a large amount of data.

---

Say we have a block which contains a few pieces of information and we want to guarantee safety on the untrusted peer-to-peer network...

---

<!-- .slide: class="on-dark" data-background-image="https://media.giphy.com/media/VSiNfsl8VIRIk/giphy.gif" -->

How do we know that the piece of data we are getting is the one that is given and hasn't been corrupted or stolen in some way?

---

In other words, how can we trust the network?

---

<video data-autoplay src="content/videos/mtree.mov"></video>

---

<!-- .slide: class="white" data-background="#17BEBB" -->
### Merkle proof

---

It matters because...

---

This provides a way for us to download a small amount of data instead of every single transaction even on untrusted nodes.

---

As long as we have a way to get the root hash, we can _prove_ the data.

---

<!-- .slide: class="white" data-background="#17BEBB" -->
## How do we get a trusted root hash?

---

Nodes only accept root hashes from trusted sources.

---

We have the root hash from our friend and we want to verify the hash...

---

We'll reconstruct the root hash and recompute the tree. If it's the same, we have a trusted root hash!

---

The new root hash is accepted and we can move on.

---

<!-- .slide: class="white" data-background="#E4572E" -->
## incentivize untrusted nodes

---

## aka mining

---

Give each computer playing a part in the network a reason to participate.

---

Every node in the network is essentially racing to complete a very difficult, random-ish math problem.

---

<!-- .slide: class="on-dark" data-background-image="http://gifs.joelglovier.com/thank-you/thankyou-sandler-farley.gif" -->

I'll spare you the gritty details

---

<!-- .slide: data-state="miner" -->

## What mining looks like...

<div id="output2"></div>

---

When a node successfully completes the problem and submits it to the network, it is rewarded and every nodes starts over again to get to the next one.

---

Mining gives everyone who participates in the network a reason to be involved.

---

Additionally, it incentivizes users to pay a transaction fee to get work done.

---

<!-- .slide: class="white" data-background="#E4572E" -->
## Consensus

---

Each node can compute the Merkle proof to verify the state of a transaction on the blockchain

---

Consensus protocol (proof of work) race from one cpu to one vote.

---

Distributed systems are designed to prevent any single computer to get too much power

---

## So what's next? Where are the bugs?

---

One major feature Bitcoin lacks is the ability to prove anything about the current state.

---

How many bitcoins do you have _right now_?

---

Every hash on the entire blockchain needs to be downloaded to get this value

---

Instead, let's look at the _next-gen_ version of Bitcoin, another currency:

---

<!-- .slide: class="white" data-background="#17BEBB" -->
## Ethereum

---

Ethereum is another network built on the blockchain, with some major improvements on bitcoin.

---

<video data-autoplay src="content/videos/eth.mov"></video>

---

We can track any state changes. From this, we get a hash (and we're back to the Merkle tree)

---

<!-- .slide: class="white" data-background="#17BEBB" -->
## Smart contracts

---

Programs that live in the blockchain

---

Contracts can:

* Send ether from one account to another
* We can create side-effects
* Voting
* Complex rules
* we have a LOT of flexibility

---

What kind of things can we do?

* Crowdfunding
* Personal lending
* Ownership
* Transparent governance

---

<!-- .slide: class="white" data-background="#29335C" -->
## Let's make one!

---

Using a TypeScript-like language called

---

<!-- .slide: class="white" data-background="#29335C" -->
### Solidity

---

In another file (outside Angular)...

---

<pre><code langage="typescript" data-noescape data-trim>
pragma solidity ^0.4.10

<fragment class="fragment">
contract MetaCoin {
  <fragment class="fragment">mapping (address => uint) balances;</fragment>

  <fragment class="fragment">
  function MetaCoin() {
    balances[tx.origin] = 10000;
  }</fragment>
}
</fragment>
</code></pre>

---

<!-- .slide: class="on-dark" data-background-image="https://media.giphy.com/media/o5oLImoQgGsKY/giphy.gif" -->

### Doesn't do much

just keeps 10000 shares in a single account

---

## Let's get the balance

---

```typescript
contract NGCoin {
  function getBalance(address addr) returns(uint) {
      return balances[addr];
  }
}
```

---

How do we integrate this with a blockchain?

---

We need to compile it and share it with the blockchain

---


With a local version of the blockchain, let's compile and migrate our contract (using a tool called `truffle`) so that it lives on the network

---

```bash
truffle compile && truffle migrate
```

---

## Let's get to Angular

---

<!-- .slide: class="on-dark" data-background-image="https://media.giphy.com/media/l0Iy6Noq5VsQzKxA4/giphy.gif" -->

## Which is surprisingly easy

---

## How do we...

---

## Interact with the Blockchain in **TypeScript**?

---

We'll work with the blockchain through a module called `web3`

---

## RPC

Blockchain tools, like `testrpc` implement an RPC protocol that we can talk to with other languages. `web3` is a JavaScript implementation of ethereum.

---

<pre><code langage="typescript" data-noescape data-trim>
<fragment data-autoslide="1000" class="fragment">import { Injectable } from '@angular/core';</fragment>
<fragment data-autoslide="1000" class="fragment">
import * as Web3 from 'web3'
import * as contract from 'truffle-contract' </fragment>
<fragment class="fragment">@Injectable()
export class Web3Service {
  public web3: any;
  public account: any;
}</fragment>
</code></pre>

---

## Connecting to blockchain

---

<pre><code langage="typescript" data-noescape data-trim>
<fragment data-autoslide="1000" class="fragment">export class Web3Service {
  <fragment data-autoslide="1000" class="fragment">constructor() {
    <fragment data-autoslide="1000" class="fragment">
    // Define connection
    const provider = new Web3.providers
    .HttpProvider("http://localhost:8545")</fragment>
    <fragment class="fragment">
    // Connect
    this.web3 = new Web3(provider);</fragment>
  }</fragment>
}</fragment>
</code></pre>

---

## Get our account

---

```typescript
export class Web3Service {
  async getAccount(i?:number) {
    const accounts = await this.getAccounts();
    return accounts[i || 0];
  }
}
```

---

<pre><code langage="typescript" data-noescape data-trim>
<fragment data-autoslide="1000" class="fragment">import { Injectable } from '@angular/core';
import { Web3Service } from '../services/web3.service'
import * as contract from 'truffle-contract'
<fragment data-autoslide="1000" class="fragment">
const metacoinArtifacts =
  require('./build/contracts/MetaCoin.json')
<fragment class="fragment">
@Injectable()
export class MetacoinService {
  public MetaCoin = contract(metacoinArtifacts)
}</fragment></fragment></fragment>
</code></pre>

---

## Hooking up the two

---

```typescript
export class MetacoinService {
  constructor(
    private web3: Web3Service
  ) {
    this.MetaCoin.setProvider(this.web3.currentProvider());
  }
}
```

---

## Checking our balance in our service

---


```typescript
export class MetacoinService {
  async getBalance() {
    // Get the coin instance
    const metaCoin = await this.MetaCoin.deployed();
    // Get the root account
    const account = await this.web3.getAccount(0);
    // Get the balance (costs nothing)
    const balance = await metaCoin
        .getBalance.call(account, { from: this.account })
    return balance;
  }
}
```

---

![](content/images/screenshot_balance.png)

---

<!-- .slide: class="white" data-background="#29335C" -->
## Events

---

How do we update the balance of the contract in our front-end?

---

One convenient feature of Ethereum are the events that are thrown in our Smart Contract.

---

We want to notify the client when the transaction is complete.

---

In our Smart Contract, we can trigger an event

---

### In our Solidity contract

<pre><code data-trim data-noescape class="with-callout" language="typescript">
contract MetaCoin {
  mapping (address => uint) balances;
  // ...
	function sendCoin(address _to, uint _value) {
    // Check if the sender has enough
    // and that there is no room for overflow
    if (balances[msg.sender] < _value ||
        balances[_to] + _value < balances[_to]) {
        throw;
    }
    // Add and subtract balances
    balances[msg.sender] -= _value;
    balances[_to] += _value;

    // Notify that the transfer took place
    <span class="callout">Transfer(msg.sender, _to, _value);</span>
	}
}
</code></pre>

---

Our client registers a listener to these events

---

### In our TypeScript/Angular app

<pre><code data-trim data-noescape language="typescript">
<fragment data-autoslide="1000" class="fragment">
this.MetaCoin.deployed()<fragment data-autoslide="1000" class="fragment">
  .then(async metaCoin => {<fragment data-autoslide="1000" class="fragment">
    // Register a listener for the Transfer event
    metaCoin.allEvents((err, evt) => {
      <fragment data-autoslide="1000" class="fragment">
      if (evt && evt.event === 'Transfer') {<fragment class="fragment">
        // Update the balance
        this.getBalance()
      </fragment>
      }</fragment>
    })</fragment>
  })</fragment>
</code></pre>

---

Now we have a reactive front-end... sound familiar?

---

RxJS

---

```typescript
export class MetacoinService {
  private _balance = <BehaviorSubject<any>>new BehaviorSubject(0);
  public balance = this._balance.asObservable();
  // ...

  async getBalance() {
    // ...
    this._balance.next(balance)
    return balance;
  }
}
```

---

<!-- .slide: class="white" data-background="#E4572E" -->
## A perfect pair!

---

<!-- .slide: class="on-dark" data-background-image="content/images/camel.jpg" -->

## Questions?

---

<!-- .slide: data-background-image="http://gifs.joelglovier.com/clap/applause.gif" -->

## Thanks
