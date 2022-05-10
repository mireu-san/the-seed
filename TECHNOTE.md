Typescript - cannot import image file.
1. https://bobbyhadz.com/blog/typescript-could-not-find-a-declaration-file-for-module-styled-components

2. https://stackoverflow.com/questions/52759220/importing-images-in-typescript-react-cannot-find-module

3. https://www.youtube.com/watch?v=4nYsbm8N4EQ
 
4. https://stackoverflow.com/questions/51100401/typescript-image-import

Summary:
1. add the following directory
@types/global/index.d.ts

2. Then add declare as follows:
(e.g. image file to remove this typescript declaration error)
declare module '*.jpg';
declare module '*.png';

3. Finally done.