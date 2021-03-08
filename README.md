## This is the new repository for the TUKAN rebuild, based on create-next-project :wrench:


- Das Theme und der Theme-Provider wurden in Index.tsx hinzugefügt
- Über das Theme werden aktuell nur die breakpoints ausgespielt
- Breackpoints sind nun allerdings min-width, das muss beachtet werden!

- styles entlang der breackpoints werden mithilfe von styled-components-breakpoint direkt in der styled-component realisiert
- styled-components-breakpoint können eigentlich über das theme in ./index.tsx angepasst werden, allerdings wirft dies aktuell einen TypeScript-Fehler, weswegen auf die DefaultBreakpoints "mobile", "tablet" und "desktop" zurückgegriffen wird