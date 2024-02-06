export function getSlides(value: any) {
     switch (value ) {
         case 'xs': return 1.3
         case 'sm': return 2.5
         case 'md': return 3.5
         case 'lg': return 5.2
         case 'xl': return 6.5
         case 'xxl': return 10
     }

     return undefined
}
