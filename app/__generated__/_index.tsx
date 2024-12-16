/* eslint-disable */
      /* This is a auto generated file for building the project */ 


      import { Fragment, useState } from "react";
      import type { FontAsset, ImageAsset } from "@webstudio-is/sdk";
      import { useResource, useVariableState } from "@webstudio-is/react-sdk/runtime";
      import { Body as Body, Link as Link, Form as Form, RemixForm as RemixForm } from "@webstudio-is/sdk-components-react-remix";
import { Fragment as Fragment_1, HtmlEmbed as HtmlEmbed, Box as Box, Slot as Slot, Button as Button, Image as Image, Heading as Heading, Paragraph as Paragraph, Input as Input, Textarea as Textarea, Text as Text } from "@webstudio-is/sdk-components-react";
import { Collapsible as Collapsible, CollapsibleTrigger as CollapsibleTrigger, CollapsibleContent as CollapsibleContent, Label as Label } from "@webstudio-is/sdk-components-react-radix";


      export const siteName = undefined;

      export const favIconAsset: ImageAsset | undefined =
        undefined;

      // Font assets on current page (can be preloaded)
      export const pageFontAssets: FontAsset[] =
        []

      export const pageBackgroundImageAssets: ImageAsset[] =
        []

      
            

            export const CustomCode = () => {
              return (<></>);
            }
          

      

      const Page = ({ }: { system: any; }) => {
let image = useResource("image_1")
let [formState, set$formState] = useVariableState<any>("initial")
return <Body
className={"w-body"}>
<Box
className={"w-box"}>
<Slot>
<Fragment_1>
<HtmlEmbed
code={"<style>\n  * {\n    /* Remove preset margins on everything so they can be applied where we want. */\n    margin: 0;\n    /* Make links scroll to their sections smoothly. */\n    scroll-behavior: smooth;\n  }\n</style>"}
className={"w-html-embed"} />
<Box
className={"w-box cumvxr2"}>
<Box
tag={"nav"}
className={"w-box cwb7fm5 cinelg cyj5a cytw8v7 c9960ik c2z6xe1 cwo4xmv cxal9y1 c18by7cw c46bk74 c11z3pd9 coidsil c1y1k88h c1298n3j c8ob1rs cgj61ci cbq7i9d czs7i3w c1s5i5dr c1a8o6in"}>
<Slot>
<Fragment_1>
<Box
className={"w-box cwo4xmv c1ely12j c1298n3j c10q1w36 c1xn48ps c1qgn3fq c73m5b4 c62j1pz"}>
<Link
className={"w-link c1ldggoq c3au49w c1aj7kjc c4h1eh1 c1qcf1am c168hqbk c5eowag c1wyk1j c1ely12j c18pe2f1 c4nr3jr c9uhcvb c1ox691j"}>
{"Home"}
</Link>
<Link
className={"w-link c1ldggoq c3au49w c1aj7kjc c4h1eh1 c1qcf1am c168hqbk c5eowag c1wyk1j c1ely12j c18pe2f1 c4nr3jr c9uhcvb c1ox691j"}>
{"Case Studies"}
</Link>
<Link
className={"w-link c1ldggoq c3au49w c1aj7kjc c4h1eh1 c1qcf1am c168hqbk c5eowag c1wyk1j c1ely12j c18pe2f1 c4nr3jr c9uhcvb c1ox691j"}>
{"Testimonials"}
</Link>
<Link
className={"w-link c1ldggoq c3au49w c1aj7kjc c4h1eh1 c1qcf1am c168hqbk c5eowag c1wyk1j c1ely12j c18pe2f1 c4nr3jr c9uhcvb c1ox691j"}>
{"Projects"}
</Link>
<Link
className={"w-link c1ldggoq c3au49w c1aj7kjc c4h1eh1 c1qcf1am c168hqbk c5eowag c1wyk1j c1ely12j c18pe2f1 c4nr3jr c9uhcvb c1ox691j"}>
{"Contact"}
</Link>
</Box>
<Box
className={"w-box cwo4xmv c1s4mvsh c4bwdqx c1ely12j c18pe2f1 cqlx23p c62j1pz c73m5b4"}>
<Link
aria-label={"LinkedIn"}
className={"w-link c1ldggoq c3au49w c1aj7kjc c4h1eh1 c1qcf1am c168hqbk c5eowag c1wyk1j c1ely12j c18pe2f1 c4nr3jr c9uhcvb c1ox691j"}>
<HtmlEmbed
code={"<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 18 17\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M0 1.97499C0 1.40259 0.202708 0.930366 0.608108 0.558324C1.01351 0.186265 1.54055 0.000244141 2.18919 0.000244141C2.82626 0.000244141 3.34169 0.183397 3.73552 0.549738C4.14092 0.927515 4.34363 1.41976 4.34363 2.0265C4.34363 2.576 4.14672 3.0339 3.7529 3.40024C3.3475 3.77802 2.81467 3.9669 2.15444 3.9669H2.13707C1.49999 3.9669 0.984562 3.77802 0.590734 3.40024C0.196905 3.02246 0 2.54737 0 1.97499ZM0.225869 17.0002V5.52953H4.08301V17.0002H0.225869ZM6.22008 17.0002H10.0772V10.5952C10.0772 10.1945 10.1236 9.8854 10.2162 9.6679C10.3784 9.27867 10.6245 8.94954 10.9546 8.68053C11.2847 8.4115 11.6988 8.277 12.1969 8.277C13.4942 8.277 14.1429 9.1413 14.1429 10.8699V17.0002H18V10.4235C18 8.72918 17.5946 7.44417 16.7838 6.56842C15.973 5.69266 14.9016 5.25478 13.5695 5.25478C12.0753 5.25478 10.9112 5.89013 10.0772 7.16084V7.19518H10.0598L10.0772 7.16084V5.52953H6.22008C6.24324 5.89585 6.25483 7.0349 6.25483 8.94669C6.25483 10.8585 6.24324 13.543 6.22008 17.0002Z\" fill=\"currentColor\"></path>\n</svg>\n"}
className={"w-html-embed c3au49w czp63di cduekgx"} />
</Link>
<Link
aria-label={"Behance"}
className={"w-link c1ldggoq c3au49w c1aj7kjc c4h1eh1 c1qcf1am c168hqbk c5eowag c1wyk1j c1ely12j c18pe2f1 c4nr3jr c9uhcvb c1ox691j"}>
<HtmlEmbed
code={"<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 31 20\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M8.7045 0.424316C9.588 0.424316 10.383 0.500817 11.112 0.656817C11.8365 0.811317 12.4545 1.06632 12.9765 1.41882C13.491 1.77132 13.893 2.23932 14.1825 2.82732C14.463 3.40782 14.6025 4.13382 14.6025 4.99182C14.6025 5.92182 14.3925 6.69882 13.971 7.31832C13.5465 7.93932 12.921 8.44782 12.087 8.84082C13.2225 9.16932 14.064 9.74382 14.622 10.5598C15.183 11.3833 15.4575 12.3688 15.4575 13.5238C15.4575 14.4613 15.279 15.2668 14.9205 15.9433C14.575 16.6097 14.0738 17.183 13.4595 17.6143C12.8232 18.0574 12.1124 18.3826 11.361 18.5743C10.5732 18.7811 9.76197 18.885 8.9475 18.8833H0V0.424316H8.7045ZM8.178 7.88232C8.898 7.88232 9.495 7.71132 9.966 7.36482C10.434 7.02282 10.6605 6.45882 10.6605 5.68632C10.6605 5.25732 10.584 4.90332 10.434 4.62582C10.2879 4.35885 10.0716 4.13686 9.8085 3.98382C9.53315 3.82051 9.22925 3.71106 8.913 3.66132C8.56829 3.59703 8.21814 3.56638 7.8675 3.56982H4.065V7.88232H8.178ZM8.4045 15.7408C8.805 15.7408 9.186 15.7063 9.5445 15.6253C9.906 15.5473 10.227 15.4213 10.5 15.2338C10.773 15.0538 10.998 14.8093 11.16 14.4973C11.3235 14.1883 11.403 13.7848 11.403 13.3003C11.403 12.3493 11.1345 11.6728 10.6035 11.2633C10.071 10.8583 9.357 10.6573 8.4825 10.6573H4.065V15.7423H8.4045V15.7408ZM21.252 15.6793C21.8025 16.2163 22.596 16.4863 23.628 16.4863C24.3675 16.4863 25.0065 16.2988 25.545 15.9268C26.076 15.5533 26.4 15.1543 26.5245 14.7418H29.757C29.238 16.3498 28.4505 17.4988 27.3735 18.1903C26.31 18.8848 25.0155 19.2298 23.5035 19.2298C22.4505 19.2298 21.5025 19.0603 20.6535 18.7243C19.8386 18.407 19.1022 17.9167 18.495 17.2873C17.8978 16.6433 17.4362 15.8858 17.1375 15.0598C16.8092 14.1465 16.6466 13.1818 16.6575 12.2113C16.6575 11.2123 16.824 10.2778 17.151 9.41532C17.4614 8.58159 17.9381 7.81966 18.552 7.17582C19.1595 6.54582 19.8795 6.04932 20.718 5.68482C21.5997 5.31398 22.5485 5.12912 23.505 5.14182C24.636 5.14182 25.6245 5.36082 26.4735 5.80182C27.2968 6.22278 28.0107 6.82984 28.5585 7.57482C29.103 8.31432 29.4915 9.16182 29.733 10.1113C29.9745 11.0593 30.0585 12.0493 29.9895 13.0858H20.343C20.3445 14.1418 20.7 15.1423 21.252 15.6793ZM25.47 8.65782C25.0335 8.17482 24.2955 7.91382 23.3925 7.91382C22.806 7.91382 22.3215 8.01132 21.9315 8.21232C21.5749 8.39243 21.2585 8.64297 21.0015 8.94882C20.7758 9.22649 20.6084 9.5469 20.5095 9.89082C20.423 10.1776 20.3672 10.4727 20.343 10.7713H26.316C26.229 9.83532 25.908 9.14382 25.47 8.65782ZM19.593 1.66332H27.0765V3.48582H19.593V1.66332Z\" fill=\"currentColor\"></path>\n</svg>\n"}
className={"w-html-embed c3au49w czp63di cduekgx"} />
</Link>
<Link
aria-label={"X/Twitter"}
className={"w-link c1ldggoq c3au49w c1aj7kjc c4h1eh1 c1qcf1am c168hqbk c5eowag c1wyk1j c1ely12j c18pe2f1 c4nr3jr c9uhcvb c1ox691j"}>
<HtmlEmbed
code={"<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 18 15\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M17.5417 1.71084C16.8824 1.99685 16.1852 2.18592 15.4718 2.27217C16.2244 1.82251 16.7885 1.11511 17.0593 0.281193C16.352 0.702249 15.5777 0.998908 14.7701 1.15828C14.2303 0.572887 13.5114 0.18322 12.7263 0.05039C11.9412 -0.0824399 11.1342 0.0490805 10.4319 0.424324C9.72952 0.799568 9.17161 1.39731 8.8456 2.1238C8.5196 2.8503 8.44394 3.66445 8.63051 4.43857C7.20036 4.36623 5.80142 3.99385 4.52457 3.3456C3.24773 2.69736 2.12153 1.78775 1.21915 0.675881C0.90264 1.22859 0.736329 1.85453 0.73675 2.49144C0.735628 3.08293 0.880783 3.66552 1.15929 4.18734C1.4378 4.70916 1.84102 5.15402 2.33304 5.4823C1.76116 5.46674 1.2015 5.31329 0.701667 5.03499V5.07884C0.705953 5.90759 0.996362 6.70942 1.52377 7.34871C2.05118 7.98799 2.78321 8.42548 3.59604 8.58718C3.28315 8.6824 2.95829 8.73261 2.63125 8.73628C2.40487 8.73364 2.17905 8.71311 1.9559 8.67489C2.18737 9.38779 2.63531 10.0108 3.23738 10.4573C3.83946 10.9037 4.56573 11.1514 5.31513 11.1658C4.04967 12.1615 2.48731 12.705 0.877084 12.7095C0.583906 12.7104 0.29096 12.6929 0 12.6568C1.64403 13.7183 3.55992 14.2818 5.51686 14.2795C6.8673 14.2935 8.20699 14.0383 9.4577 13.5287C10.7084 13.0192 11.845 12.2656 12.8012 11.3118C13.7574 10.3581 14.514 9.22341 15.0267 7.97401C15.5394 6.72462 15.7981 5.38558 15.7875 4.03511C15.7875 3.88601 15.7875 3.72813 15.7875 3.57026C16.4758 3.057 17.0693 2.42779 17.5417 1.71084V1.71084Z\" fill=\"currentColor\"></path>\n</svg>\n"}
className={"w-html-embed c3au49w czp63di cduekgx"} />
</Link>
</Box>
</Fragment_1>
</Slot>
</Box>
<Collapsible
className={"w-collapsible c1p3y5gs ceex8u7 c1uamuxw c1u182o1 c1unvyj6 c73m5b4 c5x9tdk cj72qwc c29xet5 c3chyp4"}>
<CollapsibleTrigger>
<Button
type={"button"}
aria-label={"Open mobile menu"}
className={"w-button c1ldggoq c1qf7cnn cf7co5l cy0yy4n c1xoav3l cht8rbs c1gtum3v c1ec0ibf c1k84arl cbdozsu c1wyk1j c91lhkz c3au49w c5dlnkz c1higd4l c1ely12j c18pe2f1 c1ck8c7o c1aj7kjc c4h1eh1 c1qcf1am c168hqbk c5eowag c10mun6t cahkkmm cr85php c4nr3jr c9uhcvb c1ox691j cn8zoqb cqug7ef c15zycdu c1e0rlpz"}>
<HtmlEmbed
code={"<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"100%\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"lucide lucide-menu\"><line x1=\"4\" x2=\"20\" y1=\"12\" y2=\"12\"></line><line x1=\"4\" x2=\"20\" y1=\"6\" y2=\"6\"></line><line x1=\"4\" x2=\"20\" y1=\"18\" y2=\"18\"></line></svg>"}
className={"w-html-embed"} />
</Button>
</CollapsibleTrigger>
<CollapsibleContent
data-ani={"expand"}
className={"w-collapsible-content"}>
<Box
tag={"nav"}
className={"w-box cwb7fm5 cinelg cyj5a cytw8v7 c9960ik c2z6xe1 cwo4xmv cj34d5h c18by7cw c46bk74 ces0w7i ci6mu0x crorqve c1t53kjl"}>
<Slot>
<Fragment_1>
<Box
className={"w-box cwo4xmv c1ely12j c1298n3j c10q1w36 c1xn48ps c1qgn3fq c73m5b4 c62j1pz"}>
<Link
className={"w-link c1ldggoq c3au49w c1aj7kjc c4h1eh1 c1qcf1am c168hqbk c5eowag c1wyk1j c1ely12j c18pe2f1 c4nr3jr c9uhcvb c1ox691j"}>
{"Home"}
</Link>
<Link
className={"w-link c1ldggoq c3au49w c1aj7kjc c4h1eh1 c1qcf1am c168hqbk c5eowag c1wyk1j c1ely12j c18pe2f1 c4nr3jr c9uhcvb c1ox691j"}>
{"Case Studies"}
</Link>
<Link
className={"w-link c1ldggoq c3au49w c1aj7kjc c4h1eh1 c1qcf1am c168hqbk c5eowag c1wyk1j c1ely12j c18pe2f1 c4nr3jr c9uhcvb c1ox691j"}>
{"Testimonials"}
</Link>
<Link
className={"w-link c1ldggoq c3au49w c1aj7kjc c4h1eh1 c1qcf1am c168hqbk c5eowag c1wyk1j c1ely12j c18pe2f1 c4nr3jr c9uhcvb c1ox691j"}>
{"Projects"}
</Link>
<Link
className={"w-link c1ldggoq c3au49w c1aj7kjc c4h1eh1 c1qcf1am c168hqbk c5eowag c1wyk1j c1ely12j c18pe2f1 c4nr3jr c9uhcvb c1ox691j"}>
{"Contact"}
</Link>
</Box>
<Box
className={"w-box cwo4xmv c1s4mvsh c4bwdqx c1ely12j c18pe2f1 cqlx23p c62j1pz c73m5b4"}>
<Link
aria-label={"LinkedIn"}
className={"w-link c1ldggoq c3au49w c1aj7kjc c4h1eh1 c1qcf1am c168hqbk c5eowag c1wyk1j c1ely12j c18pe2f1 c4nr3jr c9uhcvb c1ox691j"}>
<HtmlEmbed
code={"<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 18 17\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M0 1.97499C0 1.40259 0.202708 0.930366 0.608108 0.558324C1.01351 0.186265 1.54055 0.000244141 2.18919 0.000244141C2.82626 0.000244141 3.34169 0.183397 3.73552 0.549738C4.14092 0.927515 4.34363 1.41976 4.34363 2.0265C4.34363 2.576 4.14672 3.0339 3.7529 3.40024C3.3475 3.77802 2.81467 3.9669 2.15444 3.9669H2.13707C1.49999 3.9669 0.984562 3.77802 0.590734 3.40024C0.196905 3.02246 0 2.54737 0 1.97499ZM0.225869 17.0002V5.52953H4.08301V17.0002H0.225869ZM6.22008 17.0002H10.0772V10.5952C10.0772 10.1945 10.1236 9.8854 10.2162 9.6679C10.3784 9.27867 10.6245 8.94954 10.9546 8.68053C11.2847 8.4115 11.6988 8.277 12.1969 8.277C13.4942 8.277 14.1429 9.1413 14.1429 10.8699V17.0002H18V10.4235C18 8.72918 17.5946 7.44417 16.7838 6.56842C15.973 5.69266 14.9016 5.25478 13.5695 5.25478C12.0753 5.25478 10.9112 5.89013 10.0772 7.16084V7.19518H10.0598L10.0772 7.16084V5.52953H6.22008C6.24324 5.89585 6.25483 7.0349 6.25483 8.94669C6.25483 10.8585 6.24324 13.543 6.22008 17.0002Z\" fill=\"currentColor\"></path>\n</svg>\n"}
className={"w-html-embed c3au49w czp63di cduekgx"} />
</Link>
<Link
aria-label={"Behance"}
className={"w-link c1ldggoq c3au49w c1aj7kjc c4h1eh1 c1qcf1am c168hqbk c5eowag c1wyk1j c1ely12j c18pe2f1 c4nr3jr c9uhcvb c1ox691j"}>
<HtmlEmbed
code={"<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 31 20\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M8.7045 0.424316C9.588 0.424316 10.383 0.500817 11.112 0.656817C11.8365 0.811317 12.4545 1.06632 12.9765 1.41882C13.491 1.77132 13.893 2.23932 14.1825 2.82732C14.463 3.40782 14.6025 4.13382 14.6025 4.99182C14.6025 5.92182 14.3925 6.69882 13.971 7.31832C13.5465 7.93932 12.921 8.44782 12.087 8.84082C13.2225 9.16932 14.064 9.74382 14.622 10.5598C15.183 11.3833 15.4575 12.3688 15.4575 13.5238C15.4575 14.4613 15.279 15.2668 14.9205 15.9433C14.575 16.6097 14.0738 17.183 13.4595 17.6143C12.8232 18.0574 12.1124 18.3826 11.361 18.5743C10.5732 18.7811 9.76197 18.885 8.9475 18.8833H0V0.424316H8.7045ZM8.178 7.88232C8.898 7.88232 9.495 7.71132 9.966 7.36482C10.434 7.02282 10.6605 6.45882 10.6605 5.68632C10.6605 5.25732 10.584 4.90332 10.434 4.62582C10.2879 4.35885 10.0716 4.13686 9.8085 3.98382C9.53315 3.82051 9.22925 3.71106 8.913 3.66132C8.56829 3.59703 8.21814 3.56638 7.8675 3.56982H4.065V7.88232H8.178ZM8.4045 15.7408C8.805 15.7408 9.186 15.7063 9.5445 15.6253C9.906 15.5473 10.227 15.4213 10.5 15.2338C10.773 15.0538 10.998 14.8093 11.16 14.4973C11.3235 14.1883 11.403 13.7848 11.403 13.3003C11.403 12.3493 11.1345 11.6728 10.6035 11.2633C10.071 10.8583 9.357 10.6573 8.4825 10.6573H4.065V15.7423H8.4045V15.7408ZM21.252 15.6793C21.8025 16.2163 22.596 16.4863 23.628 16.4863C24.3675 16.4863 25.0065 16.2988 25.545 15.9268C26.076 15.5533 26.4 15.1543 26.5245 14.7418H29.757C29.238 16.3498 28.4505 17.4988 27.3735 18.1903C26.31 18.8848 25.0155 19.2298 23.5035 19.2298C22.4505 19.2298 21.5025 19.0603 20.6535 18.7243C19.8386 18.407 19.1022 17.9167 18.495 17.2873C17.8978 16.6433 17.4362 15.8858 17.1375 15.0598C16.8092 14.1465 16.6466 13.1818 16.6575 12.2113C16.6575 11.2123 16.824 10.2778 17.151 9.41532C17.4614 8.58159 17.9381 7.81966 18.552 7.17582C19.1595 6.54582 19.8795 6.04932 20.718 5.68482C21.5997 5.31398 22.5485 5.12912 23.505 5.14182C24.636 5.14182 25.6245 5.36082 26.4735 5.80182C27.2968 6.22278 28.0107 6.82984 28.5585 7.57482C29.103 8.31432 29.4915 9.16182 29.733 10.1113C29.9745 11.0593 30.0585 12.0493 29.9895 13.0858H20.343C20.3445 14.1418 20.7 15.1423 21.252 15.6793ZM25.47 8.65782C25.0335 8.17482 24.2955 7.91382 23.3925 7.91382C22.806 7.91382 22.3215 8.01132 21.9315 8.21232C21.5749 8.39243 21.2585 8.64297 21.0015 8.94882C20.7758 9.22649 20.6084 9.5469 20.5095 9.89082C20.423 10.1776 20.3672 10.4727 20.343 10.7713H26.316C26.229 9.83532 25.908 9.14382 25.47 8.65782ZM19.593 1.66332H27.0765V3.48582H19.593V1.66332Z\" fill=\"currentColor\"></path>\n</svg>\n"}
className={"w-html-embed c3au49w czp63di cduekgx"} />
</Link>
<Link
aria-label={"X/Twitter"}
className={"w-link c1ldggoq c3au49w c1aj7kjc c4h1eh1 c1qcf1am c168hqbk c5eowag c1wyk1j c1ely12j c18pe2f1 c4nr3jr c9uhcvb c1ox691j"}>
<HtmlEmbed
code={"<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 18 15\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M17.5417 1.71084C16.8824 1.99685 16.1852 2.18592 15.4718 2.27217C16.2244 1.82251 16.7885 1.11511 17.0593 0.281193C16.352 0.702249 15.5777 0.998908 14.7701 1.15828C14.2303 0.572887 13.5114 0.18322 12.7263 0.05039C11.9412 -0.0824399 11.1342 0.0490805 10.4319 0.424324C9.72952 0.799568 9.17161 1.39731 8.8456 2.1238C8.5196 2.8503 8.44394 3.66445 8.63051 4.43857C7.20036 4.36623 5.80142 3.99385 4.52457 3.3456C3.24773 2.69736 2.12153 1.78775 1.21915 0.675881C0.90264 1.22859 0.736329 1.85453 0.73675 2.49144C0.735628 3.08293 0.880783 3.66552 1.15929 4.18734C1.4378 4.70916 1.84102 5.15402 2.33304 5.4823C1.76116 5.46674 1.2015 5.31329 0.701667 5.03499V5.07884C0.705953 5.90759 0.996362 6.70942 1.52377 7.34871C2.05118 7.98799 2.78321 8.42548 3.59604 8.58718C3.28315 8.6824 2.95829 8.73261 2.63125 8.73628C2.40487 8.73364 2.17905 8.71311 1.9559 8.67489C2.18737 9.38779 2.63531 10.0108 3.23738 10.4573C3.83946 10.9037 4.56573 11.1514 5.31513 11.1658C4.04967 12.1615 2.48731 12.705 0.877084 12.7095C0.583906 12.7104 0.29096 12.6929 0 12.6568C1.64403 13.7183 3.55992 14.2818 5.51686 14.2795C6.8673 14.2935 8.20699 14.0383 9.4577 13.5287C10.7084 13.0192 11.845 12.2656 12.8012 11.3118C13.7574 10.3581 14.514 9.22341 15.0267 7.97401C15.5394 6.72462 15.7981 5.38558 15.7875 4.03511C15.7875 3.88601 15.7875 3.72813 15.7875 3.57026C16.4758 3.057 17.0693 2.42779 17.5417 1.71084V1.71084Z\" fill=\"currentColor\"></path>\n</svg>\n"}
className={"w-html-embed c3au49w czp63di cduekgx"} />
</Link>
</Box>
</Fragment_1>
</Slot>
</Box>
</CollapsibleContent>
</Collapsible>
</Box>
</Fragment_1>
</Slot>
<Box
tag={"main"}
className={"w-box"}>
<Box
tag={"section"}
className={"w-box c1vxr65i c69wnq3 crm8c4e c15sknei cqfbu9v ca58rjj c1omd5pd"}>
<Box
className={"w-box cinelg cwb7fm5 c171qwrw c1e2wwkr c29mhmh"}>
<Box
className={"w-box cbqgji6 c1hfni2n c1dp9qtv cwo4xmv c1qgn3fq c1ely12j c12qcm2g"}>
<Box
className={"w-box cc26bcw c1ieobi7 c1k1kfvp cziqw7e c1wze132 cimddkl c1ary46d c5f9683 cqo4qj8"}>
<Box
className={"w-box"}>
<Heading
className={"w-heading c653jxv c1ja4u2b c1mjgs49 ch8cw09 c16l70rf c1ayvw44 csqrkwt"}>
{"Insert your main heading or title content here"}
</Heading>
<Paragraph
className={"w-paragraph c1xyr4wz c653jxv c13gu0jg c94r5cx c1dole37"}>
{"Tristique senectus et netus et malesuada fames ac turpis. Fringilla phasellus faucibus scelerisque eleifend. Nulla facilisi etiam dignissim diam."}
</Paragraph>
<RemixForm
className={"w-form cylo9mp"}>
<Box
className={"w-box c12qcm2g cwo4xmv c16ou4o c6qf57n c1qgn3fq cmhmi0a"}>
<Box
className={"w-box c149653e cuwa963 c7iaf0g ctrlr74 c2w01e4 c1xzkfh7 cu1o5hz c1oqnrag"}>
<Input
placeholder={"email@example.com"}
className={"w-text-input cylo9mp cxbr17r cv2swjy cg00a2w cc5rd9t cuoy2u1 c1ujp3mw c13k4de7 cm17okc cmjqnjw c24ty20 cyx4pzc c9k6jt6 cdj8mnt c9960ik c6894j1 c2xpapv cl11muc c17r6y7l c3huc23 c1ne1psq c1hd3h7t"} />
</Box>
<Button
className={"w-button c1uvplrp cu5oq7g ctrp0t7 c1tfd1a6 c1gfssik cl9bita cjnb0gf cuy2tvl cpzkb9a cxoqftl cgspf8a c1eidjek c1i57o2z cxsugz7 c8o6yo7 c1kd53nx c14ymz7q c3au49w c1ely12j c18pe2f1 c1qvrvjh c7kj3cw c1wyk1j csm7aot czchod3 c1gvy81b c138p7j8 cspq4w2 cabe3rx c7v0s53 c1lddiev c1l6kdnk"}>
{"Sign Up"}
</Button>
</Box>
</RemixForm>
</Box>
</Box>
<Box
className={"w-box cc26bcw c1ieobi7 c1k1kfvp cziqw7e c1wze132 cimddkl c1ary46d c5f9683 cqo4qj8"}>
<Box
className={"w-box c1hl1qdn c1oqnrag cqo4qj8 cnfhu69"}>
<Image
loading={"lazy"}
optimize={false}
src={`https://payload.elecos.de${image?.data?.url}`}
className={"w-image c13v7d24 c1oqnrag"} />
</Box>
</Box>
</Box>
</Box>
</Box>
<Box
tag={"section"}
className={"w-box c182d66b cast5ss cumvxr2 copmk83 c17jn7vz"}>
<Box
className={"w-box cwb7fm5 cinelg cyj5a cytw8v7 c9960ik c2z6xe1 cjxjygl cj34d5h clyvjez cqg7b2x c194qpr1 c1ely12j ceex8u7 c1uamuxw"}>
<Box
className={"w-box cwo4xmv cj34d5h csvf9z8 c18pe2f1 c10q1w36 c1xn48ps"}>
<Heading
className={"w-heading c12vfq9a colah04 c1ldggoq ceedid4"}>
{"Your Name Here"}
</Heading>
<Box
className={"w-box c1p3y5gs c1d0l6rd"}>
<Slot>
<Fragment_1>
<Image
width={500}
height={500}
alt={"Picture of me"}
loading={"eager"}
className={"w-image c1kh9h40 coc73vo c11aqa3e cwhlebc c1y8yyyo"} />
</Fragment_1>
</Slot>
</Box>
<Paragraph
className={"w-paragraph comazpf"}>
{"Intro text: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "}
</Paragraph>
<Link
className={"w-link c1ldggoq c1qf7cnn cvc8p9r cqqcpy c1xoav3l cht8rbs c1gtum3v c1ec0ibf c1k84arl cbdozsu c1wyk1j c91lhkz c3au49w c5dlnkz c1higd4l c1ely12j c18pe2f1 c1ck8c7o c1aj7kjc c4h1eh1 c1qcf1am c168hqbk c5eowag c10mun6t cahkkmm cr85php c4nr3jr c9uhcvb c1ox691j"}>
<Text
tag={"span"}
className={"w-text"}>
{"Let’s get started"}
</Text>
<HtmlEmbed
code={"<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 6 11\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M5.63335 4.87364L1.51379 0.759206C1.16776 0.413598 0.605566 0.413598 0.259528 0.759206C-0.0865095 1.10481 -0.0865095 1.66631 0.259528 2.01191L3.75196 5.5L0.259528 8.9881C-0.0865095 9.3337 -0.0865095 9.8952 0.259528 10.2408C0.432545 10.4136 0.65957 10.5 0.886652 10.5C1.11373 10.5 1.34078 10.4136 1.51378 10.2408L5.63333 6.12637C5.97937 5.78076 5.97937 5.21927 5.63333 4.87366L5.63335 4.87364Z\" fill=\"currentColor\"></path>\n</svg>\n"}
className={"w-html-embed c3au49w czp63di cduekgx"} />
</Link>
</Box>
<Box
className={"w-box c1a8o6in"}>
<Slot>
<Fragment_1>
<Image
width={500}
height={500}
alt={"Picture of me"}
loading={"eager"}
className={"w-image c1kh9h40 coc73vo c11aqa3e cwhlebc c1y8yyyo"} />
</Fragment_1>
</Slot>
</Box>
</Box>
</Box>
<Box
tag={"section"}
id={"casestudies"}
className={"w-box c2ckml8 cast5ss cumvxr2 copmk83 c17jn7vz"}>
<Box
className={"w-box cwb7fm5 cinelg cyj5a cytw8v7 c9960ik c2z6xe1 cwo4xmv cj34d5h cnrehv4 csrgv02"}>
<Heading
tag={"h2"}
className={"w-heading c1bsjhzy c1gm7fth c1ldggoq cea4fmy cjk3hw5"}>
{"Worked with"}
</Heading>
<Box
className={"w-box cjxjygl c10q1w36 c1xn48ps c1ke74dl ceex8u7 cr532mi cqky9i9 c17jpuaq c1h5mk5h"}>
<Image
alt={"Clickup Logo"}
loading={"eager"}
className={"w-image c1ljoqby cytw8v7 c1q2ibka cyj5a c1gtum3v c1ec0ibf c1k84arl cbdozsu cn2tlu1 c1ne1psq cv30s7v c1ry2smz cvhodws cpi2wrz"} />
<Image
alt={"Dropbox Logo"}
loading={"eager"}
className={"w-image c1ljoqby cytw8v7 c1q2ibka cyj5a c1gtum3v c1ec0ibf c1k84arl cbdozsu cn2tlu1 c1ne1psq cv30s7v c1ry2smz cvhodws cpi2wrz"} />
<Image
alt={"Paychex Logo"}
loading={"eager"}
className={"w-image c1ljoqby cytw8v7 c1q2ibka cyj5a c1gtum3v c1ec0ibf c1k84arl cbdozsu cn2tlu1 c1ne1psq cv30s7v c1ry2smz cvhodws cpi2wrz"} />
<Image
alt={"Elastic Logo"}
loading={"eager"}
className={"w-image c1ljoqby cytw8v7 c1q2ibka cyj5a c1gtum3v c1ec0ibf c1k84arl cbdozsu cn2tlu1 c1ne1psq cv30s7v c1ry2smz cvhodws cpi2wrz"} />
<Image
alt={"Stripe Logo"}
loading={"eager"}
className={"w-image c1ljoqby cytw8v7 c1q2ibka cyj5a c1gtum3v c1ec0ibf c1k84arl cbdozsu cn2tlu1 c1ne1psq cv30s7v c1ry2smz cvhodws cpi2wrz"} />
</Box>
</Box>
</Box>
<Box
tag={"section"}
id={"casestudies"}
className={"w-box c182d66b cast5ss"}>
<Box
className={"w-box cwb7fm5 cinelg cyj5a cytw8v7 c9960ik c2z6xe1 cwo4xmv cj34d5h c18by7cw c46bk74"}>
<Box
className={"w-box cwo4xmv c1ely12j c18pe2f1 cfio2yc cb43exd cj34d5h c1sbqn38 comazpf cinelg cwb7fm5"}>
<Heading
tag={"h2"}
className={"w-heading c1dy2l2p colah04 c1b3ui0c ceedid4 c1sbqn38"}>
{"Case Studies"}
</Heading>
<Paragraph
className={"w-paragraph c1sbqn38"}>
{"Solving user & business problems since last 15+ years. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "}
</Paragraph>
</Box>
<Box
className={"w-box cwo4xmv cj34d5h cklp7mh c1u5u7ft"}>
<Box
className={"w-box c14sr28w cjxjygl cxal9y1 c10q1w36 c1xn48ps c1298n3j c1ely12j c1b343zr ceex8u7 c6tx73p"}>
<Box
data-ani={"slide-right"}
className={"w-box cwo4xmv cj34d5h c10q1w36 c1xn48ps c18pe2f1 cxjpbew csvf9z8"}>
<Box
className={"w-box cwo4xmv cj34d5h cfio2yc cb43exd csvf9z8 c12qcm2g"}>
<Text
className={"w-text cgxmbda c13ojdnk c15vfmh9 chl0gqo c9nymc0 c1d9ivqt c174qnua c1w3tmoi c1fl26y8 c3ys50j colah04"}>
{"Fintech"}
</Text>
<Heading
tag={"h3"}
className={"w-heading c13fppym colah04 c1b3ui0c ceedid4"}>
{"Work name here"}
</Heading>
<Paragraph
className={"w-paragraph"}>
{"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. sed do eiusmod tempor incididunt ut labore et dolore magna."}
</Paragraph>
</Box>
<Box
className={"w-box"}>
<Link
className={"w-link cinmy73 cnje2p2 cf7co5l cy0yy4n c1xoav3l cht8rbs c1gtum3v c1ec0ibf c1k84arl cbdozsu c1wyk1j c1nj6a05 c3au49w c5dlnkz c1higd4l c1ely12j c18pe2f1 c1ck8c7o c1aj7kjc c4h1eh1 c1qcf1am c168hqbk c5eowag c10mun6t cahkkmm c15pk8qc c4nr3jr c9uhcvb c1ox691j"}>
<Text
tag={"span"}
className={"w-text"}>
{"View case study"}
</Text>
<HtmlEmbed
code={"<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 6 11\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M5.63335 4.87364L1.51379 0.759206C1.16776 0.413598 0.605566 0.413598 0.259528 0.759206C-0.0865095 1.10481 -0.0865095 1.66631 0.259528 2.01191L3.75196 5.5L0.259528 8.9881C-0.0865095 9.3337 -0.0865095 9.8952 0.259528 10.2408C0.432545 10.4136 0.65957 10.5 0.886652 10.5C1.11373 10.5 1.34078 10.4136 1.51378 10.2408L5.63333 6.12637C5.97937 5.78076 5.97937 5.21927 5.63333 4.87366L5.63335 4.87364Z\" fill=\"currentColor\"></path>\n</svg>\n"}
className={"w-html-embed c3au49w czp63di cduekgx"} />
</Link>
</Box>
</Box>
<Box
data-ani={"slide-left"}
className={"w-box"}>
<Image
width={800}
height={800}
alt={"Laptop on desk"}
className={"w-image criohn3 cm998y8 cdwhzyc c1flyeu6 c1y3tt63 cqwh5jy c1o9t46f"} />
</Box>
</Box>
<Box
className={"w-box c14sr28w cjxjygl cxal9y1 c10q1w36 c1xn48ps c1298n3j c1ely12j c1b343zr ceex8u7 c1uamuxw"}>
<Box
data-ani={"slide-right"}
className={"w-box"}>
<Image
width={800}
height={1422}
alt={"creator studio"}
className={"w-image criohn3 cm998y8 cdwhzyc c1flyeu6 c1y3tt63 cqwh5jy c1o9t46f"} />
</Box>
<Box
data-ani={"slide-left"}
className={"w-box cwo4xmv cj34d5h c10q1w36 c1xn48ps c18pe2f1 cxjpbew csvf9z8"}>
<Box
className={"w-box cwo4xmv cj34d5h cfio2yc cb43exd csvf9z8 c12qcm2g"}>
<Text
className={"w-text cjfc6rx cojb1x3 c15vfmh9 chl0gqo c9nymc0 c1d9ivqt c174qnua c1w3tmoi c1fl26y8 c3ys50j colah04"}>
{"EdTech"}
</Text>
<Heading
tag={"h3"}
className={"w-heading c13fppym colah04 c1b3ui0c ceedid4"}>
{"Work name here"}
</Heading>
<Paragraph
className={"w-paragraph"}>
{"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. sed do eiusmod tempor incididunt ut labore et dolore magna."}
</Paragraph>
</Box>
<Box
className={"w-box"}>
<Link
className={"w-link c1ldggoq ccq89ml cf7co5l cy0yy4n c1xoav3l cht8rbs c1gtum3v c1ec0ibf c1k84arl cbdozsu c1wyk1j c1nj6a05 c3au49w c5dlnkz c1higd4l c1ely12j c18pe2f1 c1ck8c7o c1aj7kjc c4h1eh1 c1qcf1am c168hqbk c5eowag c10mun6t cahkkmm cjhgh3h c4nr3jr c9uhcvb c1ox691j"}>
<Text
tag={"span"}
className={"w-text"}>
{"View case study"}
</Text>
<HtmlEmbed
code={"<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 6 11\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M5.63335 4.87364L1.51379 0.759206C1.16776 0.413598 0.605566 0.413598 0.259528 0.759206C-0.0865095 1.10481 -0.0865095 1.66631 0.259528 2.01191L3.75196 5.5L0.259528 8.9881C-0.0865095 9.3337 -0.0865095 9.8952 0.259528 10.2408C0.432545 10.4136 0.65957 10.5 0.886652 10.5C1.11373 10.5 1.34078 10.4136 1.51378 10.2408L5.63333 6.12637C5.97937 5.78076 5.97937 5.21927 5.63333 4.87366L5.63335 4.87364Z\" fill=\"currentColor\"></path>\n</svg>\n"}
className={"w-html-embed c3au49w czp63di cduekgx"} />
</Link>
</Box>
</Box>
</Box>
<Box
className={"w-box c14sr28w cjxjygl cxal9y1 c10q1w36 c1xn48ps c1298n3j c1ely12j c1b343zr ceex8u7 c6tx73p"}>
<Box
data-ani={"slide-right"}
className={"w-box cwo4xmv cj34d5h c10q1w36 c1xn48ps c18pe2f1 cxjpbew csvf9z8"}>
<Box
className={"w-box cwo4xmv cj34d5h cfio2yc cb43exd csvf9z8 c12qcm2g"}>
<Text
className={"w-text cjrx9sd c1h30vuw c15vfmh9 chl0gqo c9nymc0 c1d9ivqt c174qnua c1w3tmoi c1fl26y8 c3ys50j colah04"}>
{"Pharma"}
</Text>
<Heading
tag={"h3"}
className={"w-heading c13fppym colah04 c1b3ui0c ceedid4"}>
{"Work name here"}
</Heading>
<Paragraph
className={"w-paragraph"}>
{"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. sed do eiusmod tempor incididunt ut labore et dolore magna."}
</Paragraph>
</Box>
<Box
className={"w-box"}>
<Link
className={"w-link c1ldggoq c1qf7cnn cf7co5l cy0yy4n c1xoav3l cht8rbs c1gtum3v c1ec0ibf c1k84arl cbdozsu c1wyk1j c1nj6a05 c3au49w c5dlnkz c1higd4l c1ely12j c18pe2f1 c1ck8c7o c1aj7kjc c4h1eh1 c1qcf1am c168hqbk c5eowag c10mun6t cahkkmm cr85php c4nr3jr c9uhcvb c1ox691j"}>
<Text
tag={"span"}
className={"w-text"}>
{"View case study"}
</Text>
<HtmlEmbed
code={"<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 6 11\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M5.63335 4.87364L1.51379 0.759206C1.16776 0.413598 0.605566 0.413598 0.259528 0.759206C-0.0865095 1.10481 -0.0865095 1.66631 0.259528 2.01191L3.75196 5.5L0.259528 8.9881C-0.0865095 9.3337 -0.0865095 9.8952 0.259528 10.2408C0.432545 10.4136 0.65957 10.5 0.886652 10.5C1.11373 10.5 1.34078 10.4136 1.51378 10.2408L5.63333 6.12637C5.97937 5.78076 5.97937 5.21927 5.63333 4.87366L5.63335 4.87364Z\" fill=\"currentColor\"></path>\n</svg>\n"}
className={"w-html-embed c3au49w czp63di cduekgx"} />
</Link>
</Box>
</Box>
<Box
data-ani={"slide-left"}
className={"w-box"}>
<Image
width={800}
height={534}
alt={"Screen behind plant"}
className={"w-image criohn3 cm998y8 cdwhzyc c1flyeu6 c1y3tt63 cqwh5jy c1o9t46f"} />
</Box>
</Box>
</Box>
</Box>
</Box>
<Box
tag={"section"}
id={"testimonials"}
className={"w-box c182d66b cast5ss cumvxr2 copmk83 c17jn7vz"}>
<Box
className={"w-box cwb7fm5 cinelg cyj5a cytw8v7 c9960ik c2z6xe1 cwo4xmv cj34d5h c18by7cw c46bk74"}>
<Box
className={"w-box cwo4xmv c1ely12j c18pe2f1 cfio2yc cb43exd cj34d5h c1sbqn38 comazpf cinelg cwb7fm5"}>
<Heading
tag={"h2"}
className={"w-heading c1dy2l2p colah04 c1ldggoq ceedid4"}>
{"Testimonials"}
</Heading>
<Paragraph
className={"w-paragraph"}>
{"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "}
</Paragraph>
</Box>
<Box
data-ani-children={"true"}
data-ani-progress={"slide-up"}
className={"w-box cjxjygl c10q1w36 c1xn48ps c1b343zr ceex8u7 c1uamuxw"}>
<Box
className={"w-box criohn3 cm998y8 cdwhzyc c1flyeu6 c149653e c1qr6b c1g5coq7 c1cw4g1p coyis1 c130b9wy cyixe0x c1llt5su cwo4xmv cj34d5h csvf9z8 c12qcm2g cfio2yc cb43exd c11am218 c9bvv10 c12fjeub"}>
<Paragraph
className={"w-paragraph"}>
{"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "}
</Paragraph>
<Box
className={"w-box cwo4xmv c1ely12j c12qcm2g cfio2yc cb43exd"}>
<Image
alt={"Picture of client"}
className={"w-image cnbrpv1 c1jsye0m coc73vo c11aqa3e cwhlebc c1y8yyyo cd0bjxo cqwh5jy c1o9t46f"} />
<Text
className={"w-text ceedid4 c1ldggoq colah04 czpk719"}>
{"Client Name"}
</Text>
</Box>
<Text
className={"w-text c6894j1 ckewt9g c1hk0eka c1fz4gg0 c1noefae c1ldggoq c14r1ud7 cm2nqmb"}>
{"“"}
</Text>
</Box>
<Box
className={"w-box criohn3 cm998y8 cdwhzyc c1flyeu6 c149653e c1qr6b c1g5coq7 c1cw4g1p coyis1 c130b9wy cyixe0x c1llt5su cwo4xmv cj34d5h csvf9z8 c12qcm2g cfio2yc cb43exd c11am218 c9bvv10 c12fjeub"}>
<Paragraph
className={"w-paragraph"}>
{"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "}
</Paragraph>
<Box
className={"w-box cwo4xmv c1ely12j c12qcm2g cfio2yc cb43exd"}>
<Image
alt={"Picture of client"}
className={"w-image cnbrpv1 c1jsye0m coc73vo c11aqa3e cwhlebc c1y8yyyo cd0bjxo cqwh5jy c1o9t46f"} />
<Text
className={"w-text ceedid4 c1ldggoq colah04 czpk719"}>
{"Client Name"}
</Text>
</Box>
<Text
className={"w-text c6894j1 ckewt9g c1hk0eka c1fz4gg0 c1noefae c1ldggoq c14r1ud7 cm2nqmb"}>
{"“"}
</Text>
</Box>
<Box
className={"w-box criohn3 cm998y8 cdwhzyc c1flyeu6 c149653e c1qr6b c1g5coq7 c1cw4g1p coyis1 c130b9wy cyixe0x c1llt5su cwo4xmv cj34d5h csvf9z8 c12qcm2g cfio2yc cb43exd c11am218 c9bvv10 c12fjeub"}>
<Paragraph
className={"w-paragraph"}>
{"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "}
</Paragraph>
<Box
className={"w-box cwo4xmv c1ely12j c12qcm2g cfio2yc cb43exd"}>
<Image
alt={"Picture of client"}
className={"w-image cnbrpv1 c1jsye0m coc73vo c11aqa3e cwhlebc c1y8yyyo cd0bjxo cqwh5jy c1o9t46f"} />
<Text
className={"w-text ceedid4 c1ldggoq colah04 czpk719"}>
{"Client Name"}
</Text>
</Box>
<Text
className={"w-text c6894j1 ckewt9g c1hk0eka c1fz4gg0 c1noefae c1ldggoq c14r1ud7 cm2nqmb"}>
{"“"}
</Text>
</Box>
<Box
className={"w-box criohn3 cm998y8 cdwhzyc c1flyeu6 c149653e c1qr6b c1g5coq7 c1cw4g1p coyis1 c130b9wy cyixe0x c1llt5su cwo4xmv cj34d5h csvf9z8 c12qcm2g cfio2yc cb43exd c11am218 c9bvv10 c12fjeub"}>
<Paragraph
className={"w-paragraph"}>
{"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "}
</Paragraph>
<Box
className={"w-box cwo4xmv c1ely12j c12qcm2g cfio2yc cb43exd"}>
<Image
alt={"Picture of client"}
className={"w-image cnbrpv1 c1jsye0m coc73vo c11aqa3e cwhlebc c1y8yyyo cd0bjxo cqwh5jy c1o9t46f"} />
<Text
className={"w-text ceedid4 c1ldggoq colah04 czpk719"}>
{"Client Name"}
</Text>
</Box>
<Text
className={"w-text c6894j1 ckewt9g c1hk0eka c1fz4gg0 c1noefae c1ldggoq c14r1ud7 cm2nqmb"}>
{"“"}
</Text>
</Box>
</Box>
</Box>
</Box>
<Box
tag={"section"}
id={"projects"}
className={"w-box c182d66b cast5ss"}>
<Box
className={"w-box cwb7fm5 cinelg cyj5a cytw8v7 c9960ik c2z6xe1 cwo4xmv cj34d5h c18by7cw c46bk74"}>
<Box
className={"w-box cwo4xmv c1ely12j c18pe2f1 cfio2yc cb43exd cj34d5h c1sbqn38 comazpf cinelg cwb7fm5"}>
<Heading
tag={"h2"}
className={"w-heading c1dy2l2p colah04 c1b3ui0c ceedid4 c1sbqn38"}>
{"Recent Work"}
</Heading>
<Paragraph
className={"w-paragraph c1sbqn38"}>
{"Solving user & business problems since last 15+ years. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "}
</Paragraph>
</Box>
<Box
data-ani-children={"true"}
data-ani-progress={"slide-up"}
className={"w-box cjxjygl c10q1w36 c1xn48ps c1b343zr ceex8u7 c1uamuxw"}>
<Box
className={"w-box c14sr28w cwo4xmv cj34d5h c10q1w36 c1xn48ps c1298n3j csvf9z8"}>
<Box
className={"w-box"}>
<Image
alt={"Laptop on desk"}
className={"w-image criohn3 cm998y8 cdwhzyc c1flyeu6 c1y3tt63 cqwh5jy c1o9t46f"} />
</Box>
<Box
className={"w-box cwo4xmv cj34d5h c10q1w36 c1xn48ps c18pe2f1 cxjpbew csvf9z8"}>
<Box
className={"w-box cwo4xmv cj34d5h cfio2yc cb43exd csvf9z8 c12qcm2g"}>
<Heading
tag={"h3"}
className={"w-heading c13fppym colah04 c1b3ui0c ceedid4"}>
{"Work name here"}
</Heading>
<Paragraph
className={"w-paragraph"}>
{"Labore et dolore magna aliqua. sed do eiusmod tempor incididunt ut labore et dolore magna."}
</Paragraph>
</Box>
<Box
className={"w-box"}>
<Link
className={"w-link c1ldggoq c1qf7cnn cvc8p9r cqqcpy c1xoav3l cht8rbs c1gtum3v c1ec0ibf c1k84arl cbdozsu c1wyk1j c91lhkz c3au49w c5dlnkz c1higd4l c1ely12j c18pe2f1 c1ck8c7o c1aj7kjc c4h1eh1 c1qcf1am c168hqbk c5eowag c10mun6t cahkkmm cr85php c4nr3jr c9uhcvb c1ox691j"}>
<Text
tag={"span"}
className={"w-text"}>
{"Know more"}
</Text>
<HtmlEmbed
code={"<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 6 11\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M5.63335 4.87364L1.51379 0.759206C1.16776 0.413598 0.605566 0.413598 0.259528 0.759206C-0.0865095 1.10481 -0.0865095 1.66631 0.259528 2.01191L3.75196 5.5L0.259528 8.9881C-0.0865095 9.3337 -0.0865095 9.8952 0.259528 10.2408C0.432545 10.4136 0.65957 10.5 0.886652 10.5C1.11373 10.5 1.34078 10.4136 1.51378 10.2408L5.63333 6.12637C5.97937 5.78076 5.97937 5.21927 5.63333 4.87366L5.63335 4.87364Z\" fill=\"currentColor\"></path>\n</svg>\n"}
className={"w-html-embed c3au49w czp63di cduekgx"} />
</Link>
</Box>
</Box>
</Box>
<Box
className={"w-box c14sr28w cwo4xmv cj34d5h c10q1w36 c1xn48ps c1298n3j csvf9z8"}>
<Box
className={"w-box"}>
<Image
alt={"Laptop on desk"}
className={"w-image criohn3 cm998y8 cdwhzyc c1flyeu6 c1y3tt63 cqwh5jy c1o9t46f"} />
</Box>
<Box
className={"w-box cwo4xmv cj34d5h c10q1w36 c1xn48ps c18pe2f1 cxjpbew csvf9z8"}>
<Box
className={"w-box cwo4xmv cj34d5h cfio2yc cb43exd csvf9z8 c12qcm2g"}>
<Heading
tag={"h3"}
className={"w-heading c13fppym colah04 c1b3ui0c ceedid4"}>
{"Work name here"}
</Heading>
<Paragraph
className={"w-paragraph"}>
{"Labore et dolore magna aliqua. sed do eiusmod tempor incididunt ut labore et dolore magna."}
</Paragraph>
</Box>
<Box
className={"w-box"}>
<Link
className={"w-link c1ldggoq c1qf7cnn cvc8p9r cqqcpy c1xoav3l cht8rbs c1gtum3v c1ec0ibf c1k84arl cbdozsu c1wyk1j c91lhkz c3au49w c5dlnkz c1higd4l c1ely12j c18pe2f1 c1ck8c7o c1aj7kjc c4h1eh1 c1qcf1am c168hqbk c5eowag c10mun6t cahkkmm cr85php c4nr3jr c9uhcvb c1ox691j"}>
<Text
tag={"span"}
className={"w-text"}>
{"Know more"}
</Text>
<HtmlEmbed
code={"<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 6 11\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M5.63335 4.87364L1.51379 0.759206C1.16776 0.413598 0.605566 0.413598 0.259528 0.759206C-0.0865095 1.10481 -0.0865095 1.66631 0.259528 2.01191L3.75196 5.5L0.259528 8.9881C-0.0865095 9.3337 -0.0865095 9.8952 0.259528 10.2408C0.432545 10.4136 0.65957 10.5 0.886652 10.5C1.11373 10.5 1.34078 10.4136 1.51378 10.2408L5.63333 6.12637C5.97937 5.78076 5.97937 5.21927 5.63333 4.87366L5.63335 4.87364Z\" fill=\"currentColor\"></path>\n</svg>\n"}
className={"w-html-embed c3au49w czp63di cduekgx"} />
</Link>
</Box>
</Box>
</Box>
</Box>
</Box>
</Box>
</Box>
<Slot>
<Fragment_1>
<Box
tag={"footer"}
id={"contact"}
className={"w-box cumvxr2 copmk83 c17jn7vz"}>
<Box
className={"w-box cwb7fm5 cinelg cyj5a cytw8v7 c9960ik c2z6xe1 cwo4xmv cj34d5h c18by7cw c46bk74 c182d66b cast5ss"}>
<Box
className={"w-box cwo4xmv c1ely12j c18pe2f1 cfio2yc cb43exd cj34d5h c1sbqn38 comazpf cinelg cwb7fm5"}>
<Heading
tag={"h2"}
className={"w-heading c1dy2l2p colah04 c1ldggoq ceedid4"}>
{"Get In Touch"}
</Heading>
<Paragraph
className={"w-paragraph"}>
{"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "}
</Paragraph>
</Box>
<Box
className={"w-box"}>
<Form
state={formState}
onStateChange={(state: any) => {
formState = state
set$formState(formState)
}}
className={"w-webhook-form"}>
{(formState === 'initial' || formState === 'error') &&
<Box
className={"w-box cwo4xmv cj34d5h c10q1w36 c1xn48ps c1vsslj0 cinelg cwb7fm5"}>
<Box
className={"w-box cwo4xmv cj34d5h cfio2yc cb43exd"}>
<Box
className={"w-box cwo4xmv ckvj2nm c12qcm2g cj34d5h c5dlnkz c1higd4l cjf7lij"}>
<Label
className={"w-label c1ldggoq c10mun6t"}>
{"Phone"}
</Label>
<Input
placeholder={"Phone"}
required={true}
name={"phone"}
className={"w-text-input c1io37m8 cf7co5l c1g9oyzm cy0yy4n c1pecjcs c1gtum3v c1ec0ibf c1k84arl cbdozsu c1ry2smz c4nr3jr cz3sr0s cgt9no0 cbz24ux"} />
</Box>
<Box
className={"w-box cwo4xmv ckvj2nm c12qcm2g cj34d5h c5dlnkz c1higd4l cjf7lij"}>
<Label
className={"w-label c1ldggoq c10mun6t"}>
{"Email"}
</Label>
<Input
placeholder={"Email"}
required={true}
type={"email"}
name={"email"}
className={"w-text-input c1io37m8 cf7co5l c1g9oyzm cy0yy4n c1pecjcs c1gtum3v c1ec0ibf c1k84arl cbdozsu c1ry2smz c4nr3jr cz3sr0s cgt9no0 cbz24ux"} />
</Box>
<Box
className={"w-box cwo4xmv ckvj2nm c12qcm2g cj34d5h c5dlnkz c1higd4l cjf7lij"}>
<Label
className={"w-label c1ldggoq c10mun6t"}>
{"Message"}
</Label>
<Textarea
placeholder={"Message"}
name={"message"}
className={"w-text-area c1io37m8 cf7co5l c1g9oyzm cy0yy4n c1pecjcs c1gtum3v c1ec0ibf c1k84arl cbdozsu c1ry2smz c4nr3jr cz3sr0s cgt9no0 cbz24ux"} />
</Box>
</Box>
<Button
className={"w-button c1ldggoq c1qf7cnn cvc8p9r cqqcpy c1xoav3l cht8rbs c1gtum3v c1ec0ibf c1k84arl cbdozsu c1wyk1j c91lhkz c3au49w c5dlnkz c1higd4l c1ely12j c18pe2f1 c1ck8c7o c1aj7kjc c4h1eh1 c1qcf1am c168hqbk c5eowag c10mun6t cahkkmm cr85php c4nr3jr c9uhcvb c1ox691j"}>
{"Submit"}
</Button>
</Box>
}
{(formState === 'success') &&
<Box
className={"w-box"}>
{"Thank you for getting in touch!"}
</Box>
}
{(formState === 'error') &&
<Box
className={"w-box c11sqnda"}>
{"Sorry, something went wrong."}
</Box>
}
</Form>
</Box>
</Box>
<Box
className={"w-box c11z3pd9 c1ljoqby c1q2ibka"}>
<Box
className={"w-box cwb7fm5 cinelg cyj5a cytw8v7 c9960ik c2z6xe1 cwo4xmv cj34d5h c5dlnkz c1higd4l c1ely12j c12qcm2g"}>
<Text
className={"w-text c1sbqn38"}>
{"Made with ❤️"}
</Text>
<Link
className={"w-link c1xirzh1 c1ai0a4x c1aj7kjc c4h1eh1 c1qcf1am c168hqbk c5eowag c4nr3jr c9uhcvb c1ox691j"}>
{"Credits"}
</Link>
</Box>
</Box>
</Box>
<Link
href={"https://webstudio.is/"}
target={"_blank"}
rel={"nofollow"}
className={"w-link c1fcgs6q c1gm7fth c1siyt67 cviu18q c1pxdoqr c9qv77u clhahah c84qoqp c19brnk4 c1wf8opp c12qwh4a ctnci1q c1dq9l4n c1dsjpp6 cn0s0du c5jghqe c1ly8f9s c1q8xzqx cmdj3xv c5b8f8o cymyys5 c1ely12j c18pe2f1 c3au49w c1wyk1j cyixe0x c130b9wy c15ufton cqv8qgk c1xlua6o c1qcf1am c168hqbk c5eowag ceo0dzz c1004uiq"}>
<Image
width={20}
height={20}
alt={"Webstudio Logo"}
optimize={false}
className={"w-image cyp7jo9 cy8tr50"} />
<Text
tag={"span"}
className={"w-text"}>
{"Built with Webstudio"}
</Text>
</Link>
<Slot>
<Fragment_1>
<HtmlEmbed
code={"<script>(function(factory){if(typeof define===\"function\"&&define.amd){define(factory)}else if(typeof module!==\"undefined\"&&module.exports){module.exports=factory()}else{window.enterView=factory.call(this)}})((()=>{const lib=({selector:selector,enter:enter=(()=>{}),exit:exit=(()=>{}),progress:progress=(()=>{}),offset:offset=0,once:once=false})=>{let raf=null;let ticking=false;let elements=[];let height=0;function setupRaf(){raf=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.msRequestAnimationFrame||function(callback){return setTimeout(callback,1e3/60)}}function getOffsetHeight(){if(offset&&typeof offset===\"number\"){const fraction=Math.min(Math.max(0,offset),1);return height-fraction*height}return height}function updateHeight(){const cH=document.documentElement.clientHeight;const wH=window.innerHeight||0;height=Math.max(cH,wH)}function updateScroll(){ticking=false;const targetFromTop=getOffsetHeight();elements=elements.filter((el=>{const{top:top,bottom:bottom,height:height}=el.getBoundingClientRect();const entered=top<targetFromTop;const exited=bottom<targetFromTop;if(entered&&!el.__ev_entered){enter(el);el.__ev_progress=0;progress(el,el.__ev_progress);if(once)return false}else if(!entered&&el.__ev_entered){el.__ev_progress=0;progress(el,el.__ev_progress);exit(el)}if(entered&&!exited){const delta=(targetFromTop-top)/height;el.__ev_progress=Math.min(1,Math.max(0,delta));progress(el,el.__ev_progress)}if(entered&&exited&&el.__ev_progress!==1){el.__ev_progress=1;progress(el,el.__ev_progress)}el.__ev_entered=entered;return true}));if(!elements.length){window.removeEventListener(\"scroll\",onScroll,true);window.removeEventListener(\"resize\",onResize,true);window.removeEventListener(\"load\",onLoad,true)}}function onScroll(){if(!ticking){ticking=true;raf(updateScroll)}}function onResize(){updateHeight();updateScroll()}function onLoad(){updateHeight();updateScroll()}function selectionToArray(selection){const len=selection.length;const result=[];for(let i=0;i<len;i+=1){result.push(selection[i])}return result}function selectAll(selector,parent=document){if(typeof selector===\"string\"){return selectionToArray(parent.querySelectorAll(selector))}else if(selector instanceof NodeList){return selectionToArray(selector)}else if(selector instanceof Array){return selector}}function setupElements(){elements=selectAll(selector)}function setupEvents(){window.addEventListener(\"resize\",onResize,true);window.addEventListener(\"scroll\",onScroll,true);window.addEventListener(\"load\",onLoad,true);onResize()}function init(){if(!selector){console.error(\"must pass selector\");return false}setupElements();if(!elements||!elements.length){console.error(\"no els found\");return false}setupRaf();setupEvents();updateScroll()}init()};return lib}));</script>"}
executeScriptOnCanvas={true}
clientOnly={true}
className={"w-html-embed"} />
<HtmlEmbed
code={"<style>\n:root {\n  --ani-duration: var(--duration-default, .2s);\n  --ani-delay: 0s;\n  --ani-slide-offset: 20%;\n  --ani-zoom-in-scale: 1;\n  --ani-zoom-out-scale: .85;\n  --ani-flip-rotate: 30deg;\n  --ani-easing: var(--easing-default, ease);\n  --ani-fill-mode: forwards;\n}\n[data-ani]:not([data-ani-children]),[data-ani-children]:not([data-ani-progress])>*{animation-duration:var(--ani-duration);animation-delay:var(--ani-delay);animation-timing-function:var(--ani-easing);animation-fill-mode:var(--ani-fill-mode);opacity:0}[data-ani-progress]:not([data-ani-children]),[data-ani-children]:not([data-ani])>*{transition-property:opacity,transform;transition-duration:var(--ani-duration);transition-timing-function:var(--ani-easing);opacity:0}\n@keyframes fadeIn{from{opacity:0}\nto{opacity:1}}\n@keyframes fadeOut{from{opacity:1}\nto{opacity:0}}[data-ani-children][data-ani='fade']>.in,[data-ani='fade']:where(.in:not([data-state]),[data-state$='open'],[data-state='active']){animation-name:fadeIn}[data-ani-children][data-ani='fade']>.out,[data-ani='fade']:where(.out:not([data-state]),[data-state='closed'],[data-state='inactive']){animation-name:fadeOut}\n@keyframes slideIn{from{opacity:0;translate:var(--ani-slide-transform)}\nto{opacity:1;translate:none}}\n@keyframes slideOut{from{opacity:1;translate:none}\nto{opacity:0;translate:var(--ani-slide-transform)}}[data-ani-children][data-ani|='slide']>.in,[data-ani|='slide']:where(.in:not([data-state]),[data-state$='open'],[data-state='active']){animation-name:slideIn}[data-ani-children][data-ani|='slide']>.out,[data-ani|='slide']:where(.out:not([data-state]),[data-state='closed'],[data-state='inactive']){animation-name:slideOut}[data-ani='slide-up']{--ani-slide-transform:0 var(--ani-slide-offset)}[data-ani='slide-down']{--ani-slide-transform:0 calc(-1*var(--ani-slide-offset))}[data-ani='slide-left']{--ani-slide-transform:var(--ani-slide-offset)}[data-ani='slide-right']{--ani-slide-transform:calc(-1*var(--ani-slide-offset))}\n@keyframes zoomIn{from{opacity:0;scale:var(--ani-zoom-out-scale)}\nto{opacity:1;scale:1}}\n@keyframes zoomOut{from{opacity:1;scale:1}\nto{opacity:0;scale:var(--ani-zoom-in-scale)}}[data-ani-children][data-ani='zoom']>.in,[data-ani|='zoom']:where(.in:not([data-state]),[data-state$='open'],[data-state='active']){animation-name:zoomIn}[data-ani-children][data-ani='zoom']>.out,[data-ani|='zoom']:where(.out:not([data-state]),[data-state='closed'],[data-state='inactive']){animation-name:zoomOut}[data-ani-children][data-ani-progress='zoom']>*,[data-ani-progress='zoom']:not([data-ani-children]){transform:scale(var(--ani-zoom-out-scale))}\n@keyframes flipInY{from{rotate:y var(--ani-flip-rotate);perspective:2000px;opacity:0}\nto{rotate:y 0;opacity:1}}\n@keyframes flipOutY{from{rotate:y 0;opacity:1}\nto{perspective:2000px;rotate:y var(--ani-flip-rotate);opacity:0}}\n@keyframes flipInX{from{perspective:2000px;rotate:x var(--ani-flip-rotate);opacity:0}\nto{rotate:x 0;opacity:1}}\n@keyframes flipOutX{from{rotate:x 0;opacity:1}\nto{perspective:2000px;rotate:x var(--ani-flip-rotate);opacity:0}}[data-ani-children][data-ani='flip-y']>.in,[data-ani='flip-y']:where(.in:not([data-state]),[data-state$='open'],[data-state='active']){animation-name:flipInY}[data-ani-children][data-ani='flip-x']>.in,[data-ani='flip-x']:where(.in:not([data-state]),[data-state$='open'],[data-state='active']){animation-name:flipInX}[data-ani-children][data-ani='flip-y']>.out,[data-ani='flip-y']:where(.out:not([data-state]),[data-state='closed'],[data-state='inactive']){animation-name:flipOutY}[data-ani-children][data-ani='flip-x']>.out,[data-ani='flip-x']:where(.out:not([data-state]),[data-state='closed'],[data-state='inactive']){animation-name:flipOutX}\n@keyframes expandDown{from{height:0}\nto{height:var(--newHeight)}}\n@keyframes expandUp{from{height:var(--newHeight)}\nto{height:0}}[data-ani='expand'],[data-ani='expand'][data-state='open'],[data-ani='expand'].in{--newHeight:var(--custom-height,var(--radix-accordion-content-height,var(--radix-collapsible-content-height,100%)));overflow:hidden;opacity:1}[data-ani-children][data-ani='expand']>.in,[data-ani='expand']:where(.in:not([data-state]),[data-state$='open'],[data-state='active']){animation:expandDown var(--ani-duration)var(--ani-easing)}[data-ani-children][data-ani='expand']>.out,[data-ani='expand']:where(.out:not([data-state]),[data-state='closed'],[data-state='inactive']){animation:expandUp var(--ani-duration)var(--ani-easing)}\n@media(prefers-reduced-motion:reduce){[data-ani]:not([data-ani-children]),[data-ani-progress]:not([data-ani-children]),[data-ani-children]>*{opacity:1;transform:none;animation:none;rotate:none;scale:none;translate:none}}\n</style>"}
className={"w-html-embed"} />
<HtmlEmbed
code={"<script type=\"module\">\nconst config = {\n\tintersectionOffset: 0.2,\n\tintersectionOnce: true,\n\tprogressOffset: 0,\n\tprogressOnce: false,\n};\nfunction e({trigger:e,selector:r,offset:n,once:s}){const a=\"progress\"===e;return enterView({selector:r,enter:e=>!a&&t(e,\"in\",\"out\"),exit:e=>!a&&t(e,\"out\",\"in\"),progress:(e,t)=>a&&function(e,t){e.style.opacity=t,e.style.transform=function(e,t){const r=e.parentElement,n=r&&r.hasAttribute(\"data-ani-progress\")?r.getAttribute(\"data-ani-progress\"):e.getAttribute(\"data-ani-progress\"),s=parseFloat(getComputedStyle(e).getPropertyValue(\"--ani-slide-offset\"))||0,a=parseFloat(getComputedStyle(e).getPropertyValue(\"--ani-flip-rotate\"))||0,o=1-(1-t)*(1-parseFloat(getComputedStyle(e).getPropertyValue(\"--ani-zoom-out-scale\"))||1);switch(n){case\"slide-up\":return`translateY(${(1-t)*s}px)`;case\"slide-down\":return`translateY(-${(1-t)*s}px)`;case\"slide-left\":return`translateX(${(1-t)*s}px)`;case\"slide-right\":return`translateX(-${(1-t)*s}px)`;case\"flip-x\":return`rotateX(${(1-t)*a}deg)`;case\"flip-y\":return`rotateY(${(1-t)*a}deg)`;case\"zoom\":return`scale(${o})`;default:return\"none\"}}(e,t)}(e,t),offset:n,once:s})}function t(e,t,r){e.classList.add(t),e.classList.remove(r)}function r(e,t){const r=`[${e}]${t?'[data-ani-children=\"true\"] > *':':not([data-ani-children=\"true\"])'}`;return Array.from(document.querySelectorAll(r))}const n=[...r(\"data-ani\"),...r(\"data-ani\",!0)],s=[...r(\"data-ani-progress\"),...r(\"data-ani-progress\",!0)];n.length&&e({trigger:\"intersection\",selector:n,offset:config.intersectionOffset,once:config.intersectionOnce}),s.length&&e({trigger:\"progress\",selector:s,offset:config.progressOffset,once:config.progressOnce});\n</script>"}
executeScriptOnCanvas={true}
clientOnly={true}
className={"w-html-embed"} />
</Fragment_1>
</Slot>
</Fragment_1>
</Slot>
</Box>
</Body>
}


      export { Page }
    