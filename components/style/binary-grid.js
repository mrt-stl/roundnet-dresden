export const grid = <style jsx global>{`

.grid {
    max-width: 1024px;
    width: 100%;
    margin-right: auto;
    margin-left: auto;
}

.row {
    display: flex;
    flex-direction: row;
}

.col, 
.col-1,
.col-2,
.col-4,
.col-8 {
    padding: 8px;
    box-sizing:border-box;
    height: 128px;
    color: var(--white);
    background-color: var(--secondary);
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
    }
    .col, 
    .col-1,
    .col-2,
    .col-4,
    .col-8 {
        flex-basis: 100%;
        max-width: 100%;
    }
}

`}</style>