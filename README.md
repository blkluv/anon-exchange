# Anon NFT Exchange

An anonomyous NFT exchange based on Semaphore protocol.

## Simplicity Assumption

For the simplicity of the initial system, we make the NFT all traded at 0.1 ETH. It is possible to extend to other price tiers in the future.

## System Components

### User: NFT Seller

NFT Seller can perform following 2 operations

- List NFT on the smart contract and get Semaphore id
- Claim ETH using the Semaphore id after NFT is sold. A new address should be provided to receive the ETH

### User: NFT Buyer

NFT Buyer can perform following 2 operations

- Deposit ETH to the smart contract and get Semaphore id. With the id buyer is eligible to buy the listed NFTs
- Buy NFT with the proof generated by Semaphore id. A new address should be provided to receive the NFT

### System: Semaphore Groups

There are 2 Semaphore groups to achieve the anonymous of seller and buyer.

- `Group1`: Sellers whose NFT got sold
- `Group2`: Buyers who have deposited the ETH

### Smart Contract

There should be mainly 4 functions and 2 groups above in the smart contract
functions

1. listNFT(): called by seller
2. depositETH(): called by buyer
3. withdrawETH(): called by buyer to withdraw unspent ETH
4. buyAndClaimNFT(): can be called by anyone, triggered by buyer
5. claimETH(): can be called by anyone, triggered by seller

## Transaction flow

### Seller List NFT

When seller lists the NFT on the exchange, a Semaphore identity is generated. Seller needs to note down the private Semaphore id. The smart contract will record the NFT with the corresponding public Semaphore id.

### Buyer Deposit ETH

Buyer needs to deposit ETH before it can buy NFT. When buyer deposits, a Semaphore id is generated. Buyer needs to note down the private id. The smart contract will add the public id into `Group2`.

### Buyer Purchase NFT

Buyer submits the Semaphore proof that anonymously prove its membership of `Group2`. Smart contract will verify the proof and signal the operation to prevent double spending. Buyer will provide a fresh address to receive the NFT. Additionally, the Semaphore id of seller associated with the sold NFT is added to `Group1`.

### Seller Claim ETH

Seller who wants to claim the ETH will submit the proof generated by its private Semaphore id, anonymously proving that it's a member of `Group1` and eligible to claim ETH. Smart contract will verify the proof, and signal the operation so it cannot be double claimed. Seller will also provide a fresh address to receive the ETH.

### Anonymity

Note that transaction for buying NFT and claiming ETH can be sent from any address as long as the proof is valid. To remain anonymous the approach of this project is to maintain a relayer. The relayer will just submit the transaction for the user. From public people can only know Buy or Seller is one in the group but wouldn't be able connect the NFT purchase to the original payer.

## Development 🛠️

```bash
npm run dev
# or
yarn dev
```
