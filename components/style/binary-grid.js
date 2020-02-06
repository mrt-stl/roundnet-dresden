export const gridConfig = {
    gridWidth: "1024px",
    gridPadding: "12px",
    colPadding: "12px"
}

export const grid = <style jsx global>{`

.grid {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    max-width: ${gridConfig.gridWidth};
    margin-right: auto;
    margin-left: auto;
    padding-left: ${gridConfig.gridPadding};
    padding-right: ${gridConfig.gridPadding};
}

.col, 
.col-1,
.col-2,
.col-4,
.col-6,
.col-8 {
    padding: 12px ${gridConfig.gridPadding};
    box-sizing: border-box;
    min-height: 1px;
}

.col {
    flex-grow: 1;
    flex-basis: 0;
    width: 100%;
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

.col-auto {
    flex: 0 0 auto;
    width: auto;
    max-width: none;
    box-sizing: border-box;
}

.justify-content-start {
    display: flex;
    justify-content: flex-start;
}

.justify-content-center {
    display: flex;
    justify-content: center;
}

.justify-content-end {
    display: flex;
    justify-content: flex-end;
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

    .justify-content-start,
    .justify-content-center,
    .justify-content-end,
    .align-items-center {
        flex-direction: row;
    }

    .no-wrap {
        flex-direction: row !important;
    }
}

/* Util CSS classes */
.flex {
    display: flex;
}

.no-wrap {
    flex-wrap: nowrap;
}

.no-padding {
    padding-left: 0px !important;
    padding-right: 0px !important;
}

.w-auto {
    width: auto;
}

.w-100 {
    width: 100%;
}

.h-100 {
    height: 100%;
}

`}</style>