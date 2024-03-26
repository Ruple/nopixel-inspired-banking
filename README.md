# nopixel-inspired-banking
A NoPixel-inspired banking system for Fivem
@Ruple 2021
## Dependencies

bt-target
PolyZone
any drawtext UI script (default fizzfau-ui)

### How to use
For add infos in your sql


    TriggerServerEvent("rpl-updaterecent", ply, amount, comment, date, type, sender, target, iden)

    or

     TriggerEvent("rpl-updaterecent", ply, amount, comment, date, type, sender, target, iden)



ply = your identifier
amount = money amount
comment = comment
date = current date (avalible in client)
type = value "pos" or "neg"
sender = sender
target = target
iden = ex: "WITHDRAW"

####

1. Run the SQL
