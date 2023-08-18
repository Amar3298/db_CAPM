using FI as my from '../db/datamodel';
service DEMO {
    @readonly entity BSEGF as projection on my.BSEG;
    @readonly entity BKPF as projection on my.BKPF;
}