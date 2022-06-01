import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const editionDrop = sdk.getEditionDrop(
  "0x579107397299297c17117E30BC7062731B01399F"
);

(async () => {
  try {
    await editionDrop.createBatch([
      {
        name: "coffe-DAO Membership",
        description: "A DAO for fans and coffe critics",
        image: readFileSync("scripts/assets/sommelCoffee2.png"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})();
