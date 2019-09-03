export const grid = <style jsx global>{`

:root {
    --grid-width: 1184px;
    --grid-padding: 12px;
    --col-padding: 12px;
}

.grid {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    max-width: var(--grid-width);
    margin-right: auto;
    margin-left: auto;
    padding-left: var(--grid-padding);
    padding-right: var(--grid-padding);
}

.no-wrap {
    flex-wrap: nowrap;
}

.col, 
.col-1,
.col-2,
.col-4,
.col-6,
.col-8 {
    padding: 8px var(--col-padding);
    box-sizing: border-box;
}

.col {
    flex-grow: 1;
    flex-basis: 0;
    max-width: 100%;
}

.col-1 {
    flex-basis: 12.5%;
    max-width: 12.5%;
}

.col-2 {
    flex-basis: 25%;
    max-width: 25%;
}

.col-4 {
    flex-basis: 50%;
    max-width: 50%;
}

.col-6 {
    flex-basis: 75%;
    max-width: 75%;
}

.col-8 {
    flex-basis: 100%;
    max-width: 100%;
}

.justify-content-center {
    display: flex;
    justify-content: center;
}

.align-items-center {
    display: flex;
    align-items: center;
}

@media only screen and (max-width: 768px) {
    .grid {
        flex-direction: column;
        padding-left: 0px;
        padding-right: 0px;
    }
    .col, 
    .col-1,
    .col-2,
    .col-4,
    .col-6,
    .col-8 {
        padding-left: 24px;
        padding-right: 24px;
        flex-basis: 100%;
        max-width: 100%;
    }
}

`}</style>