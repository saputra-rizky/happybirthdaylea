var config = {
    // The length of sentences can be arbitrary; you can write ten sentences or twenty sentences.
    // Try to keep each sentence within 15 words, otherwise, the display might not look very good.
    texts: [
        "Dear Lea,",  // Here, the last comma at the end of each sentence must be in English!! Very important!
        "Love",  // Same as above...
        "Hari ini hari ulang tahun kamu :),",
        "Maaf yah, maaf banget aku ga ada disana",
        "semoga, tahun depan kita bisa rayain bareng bareng secara langsung yah?",
        "Inget momen kita di Astha?",
        "I still remember your eyes :)",
        "Kamu yang cantik, dengan segala kelebihan yang kamu punya",
        "Semoga kita bisa ke jenjang berikutnya yah?",
        "Aku selalu berusaha dan berdoa yang terbaik buat kita :)",
        "once again, happy birthday sayang :)",
        "From your love, Sapu.",
    ],
    /**
     * You can leave imgs blank, but if you want to include them, they must follow the format below:
     * "Exactly match the text above": "Image address; you can place the image in the imgs folder"
     * For example:
     * "my beloved sweetheart": "./imgs/xiaokeai.jpg"
     *
     * If you don't want images, simply start each line with two slashes to comment it out.
     * For example, the image for "Today is your birthday" will not be displayed as shown below :)
     * Tip: Images are better to be square or close to square for a better visual effect.
     */
    imgs: {
        "Love": "./imgs/love.jpg",
        // "Today is your birthday": "./imgs/birthday.jpg",
    },
    // Button text descriptions; the following are the default button texts in English; you can change them to your preferred text.
    desc: {
        turn_on: "Hi sayang :)",
        play: "Yuk, nyanyi bareng dalam hati :)",
        bannar_coming: "Maaf yah?",
        balloons_flying: "Ada yang kurang yah?",
        cake_fadein: "Kue?",
        light_candle: "Lilin? hehe",
        wish_message: "Happy Birthday Sayang :)",
        story: "Ada pesan untuk kamu",
    }
};
