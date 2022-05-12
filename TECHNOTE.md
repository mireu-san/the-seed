Typescript - cannot import image file.
1. https://bobbyhadz.com/blog/typescript-could-not-find-a-declaration-file-for-module-styled-components

2. https://stackoverflow.com/questions/52759220/importing-images-in-typescript-react-cannot-find-module

3. https://www.youtube.com/watch?v=4nYsbm8N4EQ
 
4. https://stackoverflow.com/questions/51100401/typescript-image-import

5. https://stackoverflow.com/questions/44154939/load-local-images-in-react-js

Summary:
1. add the following directory
@types/global/index.d.ts

2. Then add declare as follows:
(e.g. image file to remove this typescript declaration error)
declare module '*.jpg';
declare module '*.png';

3. Finally done.

Note:

class Image extends React.Component {
    render() {
        return <img src={this.props.src} alt="logo" />;
    }
}

# Potential item:
1. Call post from Medium - api
https://stackoverflow.com/questions/36097527/how-to-retrieve-medium-stories-for-a-user-from-the-api

https://github.com/Medium/medium-api-docs
