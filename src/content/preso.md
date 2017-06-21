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

![](images/ginger.png)

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

A Merkle tree refers to a way to store and hash a large amount of data.

---

<div id="treea" class="tree"></div>

---

Each datum is split into buckets which stores a small amount of data where we take the hash of each bucket and then hash the remaining.

---

At the end, we get _one_ root hash

---

A simple merkle tree is the binary merkle tree where a bucket _always_ contains two adjacent chunks.

---

Okay, why split and not just hash all the data?

---

Merkle proofs

---

Merkle proofs consist of a chunk, the root hash, and the branch consisting of all the hashes that go with the rest of the branch to the root.

---

Merkle proofs allow us to **verify** the hashing (for the branch) is consistent all the way up the tree and allows us to **prove** the chunk is in the right spot.

---

Suppose there is a large database and the contents are stored in a merkle tree where the root hash is public and trusted.

---

A user can look up a position in the database can ask for a Merkle proof. The user can verify it's correct and verify the correct position.

---

Merkle proofs give us a way of verifying a small amount of data in a hash, which can be combined to an unbounded set of data (when combined).

---

## What? Why?

---

Okay, so Bitcoin (and variants) are built on this Merkle proof idea.

---

It matters because...

---

The benefit it provides allows us to download a small amount of data instead of every single transaction (which could be infinite... not literally).

---

Instead, a small, lightweight client can download a chain of block headers which contain a few pieces of data

---

* Hash of the previous header
* A mining difficulty value
* A nonce (proof of work)
* Timestamp
* A root hash for the tree

---

With these pieces of data, it can compute the Merkle proof to verify the state of a transaction on the blockchain

---

## Bitcoin on my front-end?

---

Does this Bitcoin make me look fat?

---

One major feature Bitcoin lacks is the ability to prove anything about the current state.

---

How many bitcoins do you have _right now_?

---

Tough bubbles, every hash on the entire blockchain needs to be downloaded to get this value

---

Instead, let's look at the "next-gen" version of Bitcoin.

---

Ethereum

---

In Ethereum, every block has a header that contains _three_ trees for three different objects:

---

* Transactions
* Receipts
* State

---

These features allow us to get and verify lots of different kinds of questions

---

* Has a transaction been included?
* Query all the instances of an event of type
* What is the _current balance_ of an account?
* What would the output be of a transaction in the blockchain?

---

These are binary merkle trees which are great for lists, but not so great for key-value pairs (think JSON objects). The state of the ethereum blockchain is essentially an object where keys are addresses and values are amount declarations.

---

This state needs to be updated a lot, so instead of an immutable binary tree, ethereum allows us to quickly compute the new tree root after modifications without needing to recompute the entire tree.

---

* Also the depth of the tree is bounded (security)
* The root of the tree depends on data, not order (unlike bitcoin)

---

The Patricia-Merkle tree allows a key under which a value is stored is encoded into the _path_ that we have to take down the tree.

Each node has 16 children, so the path is determined by it's hex encoding.

---

The differences of a radix tree and ethereum:

* Nodes are referenced by hashes (the cryptographic fingerprint of the previous nodes)
* Different types of nodes
* Branch nodes have lists of length 17, where the first 16 elements are the 16 possible hex characters and the final element holds a value where the key ends and the branch node.

---

