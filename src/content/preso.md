## Angular, The blockchain, and you

---

## First things first

---

## Who am I?

---

## Ari Lerner

* [ng-book 2](https://www.ng-book.com/2)
* [fullstackreact](https://fullstackreact.com)

---

<!--![](./images/ginger.png)-->

---

### part-theory/part-code

---

### What are we talking about?

---

Building your **own cryptocurrency** and **visualizing** it through an Angular app!

---

## Have you heard of bitcoin?

---

## Have you heard of the blockchain?

---

Bitcoin is **powered** by the Blockchain

---

## What is the blockchain?

---

Although it sounds fancy...

---

The blockchain is just an

## ordered ledger of facts

---

... that is cleverly distributed across a peer-to-peer network of untrusted nodes around the world, that attempts to solve difficult computer science problems such as reconciliation and distributed consensus.

---

### How does it work?

---

## Merkle trees

---

## What the hell are merkle trees and why do I care?

---

Before we get there, let's talk about **hashes**

---

A hash is a function that can be used to map data of arbitrary size to a data of fixed size. You give it data and it gives you _random_ data of a consistent length.

---

* Any input
* Same-length output
* Unlikely collision events (two inputs to share an output)

---

## Allows us to quickly prove data is real

---

<!-- .slide: data-state="hashes" -->

SHA1 examples:

<div id="output"></div>

---

## Given a few items

We can hash a few items together and hash it again... We can create a merkle tree...

---

A Merkle tree refers to a way to store and hash a large amount of data.

---

<svg id="treea" class="tree"></svg>

---

Given the root hash, when we change one file, it changes the resulting color... given a root hash, we can prove if anything is updated/changed.

---

Merkle proofs

---

Merkle proofs consist of a chunk, the root hash, and the branch consisting of all the hashes that go with the rest of the branch to the root.

---

Suppose there is a large database and the contents are stored in a merkle tree where the root hash is public and trusted.

---

We can look up a position in the database can ask for a Merkle proof.

---

Merkle proofs give us a way of verifying a small amount of data in a hash, which can be combined to an unbounded set of data (when combined).

---

Ever use git?

---

You're using a merkle tree!

---

We have _all_ the files in our project, we can checkout a hash at any point in history, we can check out just a single file, etc. etc. We can see the _one-line_ difference. We can _prove_ we're only changing a single line.

---

## Blockchains

---

When we add or update a node, we can prove this at any point.

---

It matters because...

---

This provides a way for us to download a small amount of data instead of every single transaction (which could be infinite... not literally).

---

Instead, a small, lightweight client can download a chain of block headers which contain a few pieces of data

---

As long as we have a way to get the root hash, we can _prove_ the data.

---

1. Get data
2. Hash it together

---

## Bitcoin

A list of transactions.

---

We can _always_ know the order which the transactions occurred (to avoid double-pay bug).

---

We have blocks of transactions at a certain time, we know the order.

---

* blocks are added (mined) over time
* Nodes take turns adding blocks
* The root checksum starts with a number of zeros (0)
* A `nonce` (allows us to create new checksums)
* Difficulty can be changed.

---

Who gets to add another block? A proof of work consensus protocol where computers race to finish a really hard problem.

---

```
// Insert details here (just kidding)
```

---

With these pieces of data, it can compute the Merkle proof to verify the state of a transaction on the blockchain

---

Distributed systems are designed to prevent any single computer to get too much power

---

## Mining (consensus)

---

* Miners are computers that work on a really hard problem.
* The computer that solves the problem is _rewarded_ (coins/tokens/eth)
* In addition, that computer wins the transction fees
* Incentivizes users to pay fees depending on urgency

---

One major feature Bitcoin lacks is the ability to prove anything about the current state.

---

How many bitcoins do you have _right now_?

---

Every hash on the entire blockchain needs to be downloaded to get this value

---

Instead, let's look at the _next-gen_ version of Bitcoin.

---

## Ethereum

---

Merkle trees are great for lists, but not so great for key-value pairs (think JSON objects). The state of the ethereum blockchain is essentially an object where keys are addresses and values are amount declarations using a Patricia-Merkle tree.

---

Instead of transactions, Ethereum records computer operations.

---

We can track any state changes. From this, we get a hash (and we're back to the Merkle tree)

---

Blocks of operations contain:

* Reward paid
* Time of transaction
* List of transactions
* Gas (fee)
* Hash
* ...

---

Each interaction is cryptographically signed (a transaction) by the user and using this, we can interact with a program called **smart contracts**.

---

Note, we have to pay for each interaction

---

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

## Let's make one!

