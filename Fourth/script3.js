// 1
class PrintMaсhine {
    print(size, color, fontFamily) {
        document.write(
            `<p style="font-size:${size}px; color:${color}; font-family:${fontFamily};">
            Text
            </p>`
        )
    }

}

const MyPrintMachine = new PrintMaсhine();
MyPrintMachine.print("30", "blue", "Consolas");

// 2
class Newspaper{
    dateHandler(date) {
        if (!date) return "";

        const publishDate = new Date(date);
        const now = new Date();

        const diffMs = now - publishDate;
        const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

        if (diffDays < 1) {
            return "today";
        }

        if (diffDays < 7) {
            return `${diffDays} days ago`;
        }

        const day = String(publishDate.getDate()).padStart(2, "0");
        const month = String(publishDate.getMonth() + 1).padStart(2, "0");
        const year = publishDate.getFullYear();

        return `${day}.${month}.${year}`;
}

    print(header, text, arr, date) {
        document.write(
            `
            <div style="
    max-width: 700px;
    padding: 25px;
    background: #f5f5f5;
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
    font-family: Arial, sans-serif;
    line-height: 1.6;
">
                <h1 style="font-weight: bold;">${header}</h1>
                <p2>${this.dateHandler(date)}</p>
                <p1>${text}</p1>
                <ol style="list-style-type: none; display: flex; gap: 5px; padding-left: 0; ">
                    ${arr.map(item => `<li style="text-decoration: none;">#${item}</li>`).join('')}
                </ol>
            </div>
            `
        ) 
    }
}

let newHeader = "What is Lorem Ipsum?";
let newArr = ["lorem", "ipsum", "text"]
let nowDate = new Date(2026, 5, 11);
let newText = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library, took a 1914 Cicero translation and scrambled it to make dummy text for Letraset's Body Type sheets. It has survived not only many decades, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised thanks to these sheets and more recently with desktop publishing software including versions of Lorem Ipsum."
const myNewspaper = new Newspaper();
myNewspaper.print(newHeader, newText, newArr, nowDate);

// 3
class News {
    constructor(title, text, tags, date) {
        this.title = title;
        this.text = text;
        this.tags = tags;
        this.date = new Date(date);
    }
}

class NewsFeed {
    constructor() {
        this.news = [];
    }

    count() {
        return this.news.length;
    }

    addNews(newsItem) {
        this.news.push(newsItem);
    }

    removeNews(title) {
        this.news = this.news.filter(item => item.title !== title);
    }

    sortByDate() {
        this.news.sort((a, b) => b.date - a.date);
    }

    findByTag(tag) {
        return this.news.filter(item => item.tags.includes(tag));
    }

    printAll() {
        // Like in C# and new C++, forEach() with arrow function
        this.news.forEach(item => {
            document.write(`
                <div style="
                    border: 1px solid #ccc;
                    padding: 15px;
                    margin: 10px 0;
                    border-radius: 10px;
                ">
                    <h2>${item.title}</h2>
                    <p>${item.date.toLocaleDateString()}</p>
                    <p>${item.text}</p>
                    <p>${item.tags.map(tag => "#" + tag).join(" ")}</p>
                </div>
            `);
        });
    }
}

const feed = new NewsFeed();

feed.addNews(
    new News(
        "JavaScript 2026",
        "New JavaScript features released.",
        ["javascript", "web"],
        "2026-06-13"
    )
);

feed.addNews(
    new News(
        "CSS Tricks",
        "Useful CSS techniques.",
        ["css", "design"],
        "2026-06-10"
    )
);

feed.addNews(
    new News(
        "HTML Update",
        "New HTML elements added.",
        ["html", "web"],
        "2026-06-12"
    )
);

console.log("Count:", feed.count());

console.log("Tag 'web':");
console.log(feed.findByTag("web"));

feed.sortByDate();

console.log("After sorting:");
console.log(feed.news);

feed.removeNews("CSS Tricks");

console.log("After deleting CSS Tricks:");
console.log(feed.news);

feed.printAll();