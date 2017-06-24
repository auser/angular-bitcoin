## Angular, the blockchain, and you

---

<!-- .slide: data-background-image="content/images/breakfast.jpg" -->

## First, a quick thank you

---

<!-- .slide: class="white" data-background="#17BEBB" -->
## Who am I?

---
<!-- .slide: class="white" data-background="#17BEBB" -->
## Ari Lerner

* [ng-book 2](https://www.ng-book.com/2)
* [fullstackreact](https://fullstackreact.com)

---

Discount code at the end

---

## This talk is

### theory
### code

---

## Why Blockchain at an Angular conference?

---

## Revolution begets revolution

[Will Blockchain(s) Eat the Marketplace Stack?](https://medium.com/point-nine-news/will-blockchain-s-eat-the-marketplace-stack-cf5952889aa0)
[How The Blockchain Will Transform Everything From Banking To Government To Our Identities](https://www.forbes.com/sites/laurashin/2016/05/26/how-the-blockchain-will-transform-everything-from-banking-to-government-to-our-identities/#1d076c0e558e)
[How blockchains could change the world](http://www.mckinsey.com/industries/high-tech/our-insights/how-blockchains-could-change-the-world)

---

## So what are we doing?

---

### Build our **own cryptocurrency** and **visualize** it with Angular

---

<!-- .slide: class="white" data-background="#76B041" -->
## Have you heard of bitcoin?

---

Bitcoin is a currency that...

---

And the blockchain is... the thing that enables this.

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

... that is cleverly distributed across a peer-to-peer network of untrusted nodes around the world, that attempts to solve difficult computer science problems such as reconciliation and distributed consensus.

---

### How does it work?

(aka, let's peek under the hood)

---

## Three features

* distributed in a p2p network
* incentivize untrusted nodes
* consensus

---

<!-- .slide: class="white" data-background="#E4572E" -->
## Distributed in a p2p network

---

<video data-autoplay src="content/videos/distributed.mov"></video>

---

## We need a way to confirm interactions in a proveable way on unstrustworthy nodes

---

## Before we get there, let's talk about **hashes**

---

## A hash is a function that can be used to map data of arbitrary size to data of fixed size.

Input => random data of fixed length

---

* Any input
* Same-length output
* Unlikely collision events (two inputs to share an output) -- uniquely identify
* One-way (can't de-hash a hash)

---

## Allows us to quickly prove data is real

---

## So what does a hash look like?

---

<!-- .slide: data-state="hashes" -->
<div id="output"></div>

---

## So why do we use these hashes?

---

## Merkle tree

With some extra information, we can hash them all together and hash them again to create a Merkle tree.

---

## What the heck is a Merkle Tree?

---

A Merkle tree refers to a way to store and hash a large amount of data.

---

Say we have a block which contains a few pieces of information and we want to guarantee safety on an untrustworthy network...

---

How do we know that the piece of data we want is the one that is given.

---

In other words, how can we trust the network?

---

<video data-autoplay src="content/videos/mtree.mov"></video>

---

Look familiar? You've worked with merkle trees before!

---

This is `git`!

---

<!-- .slide: class="white" data-background="#17BEBB" -->
### Merkle proof

---

Suppose there is a large database and the contents are stored in a merkle tree where the root hash is public and trusted.

---

We can look up data in the database and verify it's trustworthy.

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

I'll spare you the gritty details

---

[Insert mining demo here]

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

There needs to be a way for nodes to know what data is valid...

---

When the problem is solved, it's broadcasted across the network for each node to merkle-proof the theory.

---

Each node accepts or rejects the transaction of the entire tree and the node becomes the next canonical node.

---

Who gets to add another block? A proof of work consensus protocol where computers race to finish a really hard problem.

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

Ethereum is also another currency, with some differences of bitcoin.

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

All these operations are public

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

```javascript
pragma solidity ^0.4.10

contract NGCoin {
	mapping (address => uint) balances;

	function NGCoin() {
		balances[tx.origin] = 10000;
	}
}

```

---

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

Let's start a private network using a tool called `testrpc`

---

```bash
$ testrpc --blocktime 2
```

---

With our blockchain, let's compile our contract (using a tool called `truffle`)

---

```bash
truffle compile
```

---

And add it to the blockchain

---

```bash
truffle migrate
```

---

## Let's get to Angular

---

```bash
$ ng new ngwallet
```

---

## Interact with the Blockchain

---

We'll work with the blockchain through a module called `web3`

---

## How?

---

## RPC

Blockchain tools, like `testrpc` implement an RPC protocol that we can talk to with other languages. `web3` is a JavaScript implementation of ethereum.

---

```typescript
import { Injectable } from '@angular/core';

import * as Web3 from 'web3'
import * as contract from 'truffle-contract'

@Injectable()
export class Web3Service {
  public web3: any;
  public account: any;
}
```

---

## Connecting to blockchain

---

```typescript
export class Web3Service {
  constructor() {
    // Define connection
    const provider = new Web3.providers
    .HttpProvider("http://localhost:8545")
    // Connect
    this.web3 = new Web3(provider);
  }
}
```

---

## Get our account

---

```typescript
export class Web3Service {
  async getAccount(i?:number) {
    if (!this.account) {
      const accounts = await this.getAccounts();
      i = i || 0;
      this.account = accounts[i];
    }
    return this.account;
  }
}
```

---

## Let's check out balance

---

```bash
ng g service metacoin
```

---

```typescript
import { Injectable } from '@angular/core';
import { Web3Service } from '../services/web3.service'
import * as contract from 'truffle-contract'

const metacoinArtifacts =
  require('./build/contracts/MetaCoin.json')
@Injectable()
export class MetacoinService {
  public MetaCoin = contract(metacoinArtifacts)
}
```

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

## Checking our balance in TypeScript

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

## Let's add transactions

---

### Back to the smart contract

---

```typescript
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
	}
}
```

---

## Simple, right?

---

We can call this directly in Angular

---

## Metacoin service

```typescript
export class MetacoinService {
  transaction(addr: string, amount: number) {
    return new Promise(async (resolve, reject) => {
      try {
        // Get the contract instance
        const deployed = await this.MetaCoin.deployed();
        const from = await this.web3.getAccount();
        // Send the coin (async)
        resolve(
          deployed.sendCoin(addr, amount, { from }))
      } catch (e) {
        reject(e);
      }
    })
  }
}
```

---

![](content/images/sent.png)

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

```typescript
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
    Transfer(msg.sender, _to, _value);
	}
}
```

---

Our client registers a listener to these events

---

```typescript
this.MetaCoin.deployed()
  .then(async metaCoin => {
    // Register a listener for the Transfer event
    metaCoin.allEvents((err, evt) => {
      if (evt && evt.event === 'Transfer') {

        // Update the balance
        this.getBalance()
      }
    })
  })
```

---

Now we have a reactive front-end... sound familiar?

---

Connecting it through RxJS:

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

## Questions?

---

## Thanks
