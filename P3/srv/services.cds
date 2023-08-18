using P3.FI from '../db/datamodel';
service DEMO {
    @readonly entity BSEG as projection on FI.BSEG;
    @readonly entity BKPF as projection on FI.BKPF;
}