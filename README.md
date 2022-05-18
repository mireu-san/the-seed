# Welcome, visitor.
This is what I am thinking to do.

# Blueprint:
1. Welcome screen (client side)
2. Admin's page (client side)
3. About page
4. Portfolio link page
5. contact page

# Agile methodology
1. Welcome screen (act as welcome page)
- As a visitor, I want to move on to the main screen.
- As a developer, I need to set up main screen.
### To do that,
- Separated page, background image, transition effect.
- render it from index.tsx. Make a new file call 'welcome.tsx'. Try using styled components first.'
- render and disappear in time or let it disappear if click the button.
- once clicked, make all app.tsx content to appear.   

2. Admin's page (act as main screen)
- As a visitor, I want to explore and click 'about, portfolio, contact' link.
- As a developer, I need to set up link/menu bar for visitor.
- Mainly composed as :
1. Right side : menu(link) 
2. Left side : Main page of each link to display it (once clicked).

### Literally. Each page design will follow the admin's page:
3. About page
4. Portfolio link page
5. contact page

# Disclaimer:
This repository is for personal use only. No commercial activity is planned. Any external images may belonging to its original owner.

# Checklist
[x] 1. Logo insertion, get used to typescript.
[x] 2. Admin's control panel page - e.g. navbar, status panel page.
[x] 3. Work on - three pages
[ ] 4. Temporaily publish page on netlify.

# What to do (debugging):
[x] 1. Fix overlay recognition issue (cannot drag text on image - about, project. works normally from Main.tsx )
- Possible solution: this may be due to 'no grid setup' at the beginning.
- Since position: absolute; proved to display text on image, don't change this.
- Navbar (from main.tsx, h1->header keep overlaying the left side, as navbar. This is major issue to prevent clicking external link from about page.)
(Advised to practice bit more with example - on image, grid, text)
- Good. Just editing Picture->header->position:absolute;-> relocating lost navbar position -> nav tag -> resolved the issue.
- Much hopeful.

# Good to do (refactoring process after finishing the draft):
[ ] 1. Add transition effect and disappear the logo.
[ ] 2. Add grid on each page (admin panel, about, project) and clean up the css's location set (e.g. left: 100 rem)
[ ] 3. Consider relocating all css files to css folder.
