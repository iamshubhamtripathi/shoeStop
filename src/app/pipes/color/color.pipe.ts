import { Pipe, PipeTransform } from '@angular/core';

enum color { black, blue, green, red, yellow, white, orange, purple, brown, pink, gray, indigo, violet, cyan, magenta, lime, maroon, olive, navy, teal, silver, crimson, aqua, limegreen, peru, salmon, sandybrown, sienna, tan, wheat, yellowgreen, aliceblue, antiquewhite, aquamarine, azure, beige, bisque, blanchedalmond, blueviolet, burlywood, cadetblue, chartreuse, chocolate, coral, cornflowerblue, cornsilk, darkblue, darkcyan, darkgoldenrod, darkgray, darkgreen, darkgrey, darkkhaki, darkmagenta, darkolivegreen, darkorange, darkorchid, darkred, darksalmon, darkseagreen, darkslateblue, darkslategray, darkslategrey, darkturquoise, darkviolet, deeppink, deepskyblue, dimgray, dimgrey, dodgerblue, firebrick, floralwhite, forestgreen, fuchsia, gainsboro, ghostwhite, gold, goldenrod, greenyellow, grey, honeydew, hotpink, indianred, ivory, khaki, lavender, lavenderblush, lawngreen, lemonchiffon, lightblue, lightcoral, lightcyan, lightgoldenrodyellow, lightgray, lightgreen, lightgrey, lightpink, lightsalmon, lightseagreen, lightskyblue, lightslategray, lightslategrey, lightsteelblue, lightyellow, linen, mediumaquamarine, mediumblue, mediumorchid, mediumpurple, mediumseagreen, mediumslateblue, mediumspringgreen, mediumturquoise, mediumvioletred, midnightblue, mintcream, mistyrose, moccasin, navajowhite, oldlace, olivedrab, orangered, orchid, palegoldenrod, palegreen, paleturquoise, palevioletred, papayawhip, peachpuff, plum, powderblue, rosybrown, royalblue, saddlebrown, sandy }

@Pipe({
  name: 'color'
})
export class ColorPipe implements PipeTransform {

  transform(value: number,): string {
    return color[value];
  }

}
