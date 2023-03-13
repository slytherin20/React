## Q: What are all ways to write a CSS?

A:

- **Inline CSS**: Adding CSS to HTML elements using style attribute.
- **External CSS**: A seperate style file which seperates CSS from HTML and JS.
- **Component Libraries**: Libraries that provide pre-build components with styling also.
- **Styled Components**: CSS written inside JSX.
- **Frameworks**: Collection of style sheets provided for faster styling process.

## Q: How to configure Tailwind CSS?

A:

1. npm i -D tailwindcss postcss
2. npx tailwind init. This creases tailwind config file.
3. In tailwind.config.js file, write file extensions which tailwind will scan for CSS: content:[“./src/{.html,.js}”]
4. Create .postrccss.json if not automatically created.
5. In .postrccss,

   ```
   {
   “plugins”:{
   “tailwindcss”:{}
   }
   }
   ```

   This tells postcss to transpile tailwindcss syntax to vanilla css.

6. In style.css:

   ```
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
   ```

This makes sure that tailwind classes that we use in our codebase have there styles included in style.css

## Q: In tailwind.config.js, what does all the keys mean?

A:

1. **Content:** here we specify the path to all the files like HTML, JS files in which we have included the tailwind class names.
2. **Theme:** In theme, we specify our color palettes, fonts, border radius etc. , anything related to visual design. Here we can modify the styles of the prebuilt tailwind classes. Eg: we can change the sm range here.
3. **Extends:** Preserve the default values of the theme options and allows adding new values to it.

   ```
   theme: {
       extend: {
       // Adds a new breakpoint in addition to the default breakpoints
       screens: {
           '3xl': '1600px',
       }
       }
   }
   ```

4. **Plugins:** Allows us to register plugins with tailwind that allows us to use additional utilities, components, base style or custom variants.

   ```
   plugins: [
       require('@tailwindcss/forms'),
       require('@tailwindcss/aspect-ratio'),
       require('@tailwindcss/typography'),
       require('tailwindcss-children'),
   ],
   ```

## Q: Why do we have .postcssrc file?

A: This file tells postcss to transpile the postcss plugins syntax to vanilla CSS. Here we specify the plugins such as tailwindcss which needs to be transformed into vanilla CSS.
