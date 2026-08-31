import "dotenv/config";
import fs from "fs";
import { uploadToB2, downloadFromB2, deleteFromB2 } from "./services/storage.service.js";

const testFile = "b2-test.txt";
const objectKey = "test/b2-test.txt";

fs.writeFileSync(testFile, "Enterprise AI Knowledge Hub - B2 test");

try {
    console.log("Uploading to B2...");
    const uploaded = await uploadToB2(
        testFile,
        objectKey,
        "text/plain"
    );
    console.log("Upload successful:", uploaded);

    console.log("Downloading from B2...");
    const downloaded = await downloadFromB2(objectKey);
    console.log(
        "Download successful:",
        downloaded.ContentType
    );

    console.log("Deleting from B2...");
    const deleted = await deleteFromB2(objectKey);
    console.log("Delete successful:", deleted);
} catch (error) {
    console.error("B2 TEST FAILED");
    console.error(error);
} finally {
    if (fs.existsSync(testFile)) {
        fs.unlinkSync(testFile);
    }
}
