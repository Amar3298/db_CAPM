namespace FI;


entity BSEG
{
    BUKRS : String(100);
    BELNR : String(100);
    GJAHR : Date;
    DMBTR : Decimal(34,2);
    WRBTR : Decimal(34,2);
}

entity BKPF
{
    BUKRS : String(100);
    BELNR : String(100);
    GJAHR : Date;
    WAERS : String(100);
    XBLNR : String(100);
}