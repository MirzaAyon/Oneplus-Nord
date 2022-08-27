export const faqsData = [
    {
        id: 1,
        title: "React Context API: What is it and How it works?",
        desc: "React context API is designed for props drilling, Context is a way to pass data through all the component tree without having to pass props down manually at every level.some use cases the Context API is ideal for: theming, user language, authentication, etc. For Using Context API first we have to initialize the context using createContext function from React. Then We have to use Provider that means Provider component is going to be used to wrap the components thats will have access to use the Context.The Provider receives a props called value.we can pass different kind of single or multiple data through this value. And to access these value from different component we need to use useContext hook.The useContext hook allows us to connect and consume a context. The useContext hook receives a single argument, which is the context that you want to have access to.",
    },
    {
        id: 2,
        title: "What Are Semantic HTML Tags and How to Use Them?",
        desc: "Semantics Elements have meaningfull Name which tells about the type of Content.For example header footer aside etc. HTML5 introduced many semantic tag which is basically make a developers life easy because now developer can design the web according to this semantic elements.Some main semantics elemets are, 1)Header - As the name suggests, it is for the header of a section introductory of a page. There can be multiple headers on a page. 2)Main- Main Contains All the main parts of the webpage , inside main we can use i)Section ii)Article ii) Aside etc. Section Can contains a part of things is a webpage , Article can contain something like blog post and aside can caontain some extra things like link,or info about something in a side of that page, Last one is footer which is basically contains some info about the author of that page and some link to navigate and contact.",
    },
    {
        id: 3,
        title: "CSS Inline vs Inline-Block vs Block",
        desc: "Every HTMl elements has a default display value Which is block or inline.A block level element takes the full width available.Also A block level element always starts on a new line. Some example of block level elements are div , p, header, main, li, ul , h1-h6 etc. An inline element does not start on a new line.An inline element only takes up as much width as necessary. For Example img, a, i, b, q, sub etc tags are inline elements. Inline blocks are very similar in nature as inline elements. They can do everything that inline does but can also be set some widths, heights and vertical margins! For Examples imput, button, textarea etc are inline block elements.But we can manually manipulate CSS display properties to meet your desired layouts. You could easily give a div display of inline and it will behave as an inline element",
    },
];
