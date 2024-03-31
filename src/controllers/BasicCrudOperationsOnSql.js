import fs from 'fs/promises';


const fileHandlings = async () => {
    try {
        await fs.writeFile('./message.txt', 'Hello World');
        console.log('File written successfully');
    } catch (err) {
        console.error(err);
    }
}
const path = "/Users/saicharan/Developer/Notes/TobeFind.txt";

const readFile = async () => {

    try {
        await fs.readFile(path, "utf-8", (err, data) => {
            if (err) throw err;
            console.log(data);
            console.log("File read successfully");
        })

    } catch (err) {
        console.error(err);
    }
}


export default fileHandlings