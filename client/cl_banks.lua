local closedBanks = {}
local listening = false
local isBankInterfaceOpen = false

local banka1 = BoxZone:Create(vector3(1175.8, 2706.82, 38.09), 2.95, 0.8, {
    name = "banking",
    heading = 271,
    minZ = 36.99,
    maxZ = 40.59
})

local banka2 = BoxZone:Create(vector3(-2962.62, 482.18, 15.7), 2.95, 0.8, {
    name = "banking",
    heading = 177,
    minZ = 14.6,
    maxZ = 18.2
})

local banka3 = BoxZone:Create(vector3(252.63, 221.23, 106.29), 2.95, 0.8, {
    name = "banking",
    heading = 70,
    minZ = 105.19,
    maxZ = 108.79
})

local banka4 = BoxZone:Create(vector3(242.22, 224.99, 106.29), 2.95, 0.8, {
    name = "banking",
    heading = 70,
    minZ = 105.19,
    maxZ = 108.79
})

local banka5 = BoxZone:Create(vector3(-1213.29, -331.08, 37.78), 2.95, 0.8, {
    name = "banking",
    heading = 118,
    minZ = 36.58,
    maxZ = 40.18,
})

local banka6 = BoxZone:Create(vector3(-351.63, -49.67, 49.04), 2.95, 0.8, {
    name = "banking",
    heading = 71,
    minZ = 47.99,
    maxZ = 51.39
})

local banka7 = BoxZone:Create(vector3(313.58, -278.91, 53.92), 2.95, 0.8, {
    name = "banking",
    heading = 70,
    minZ = 52.87,
    maxZ = 56.27
})

local banka8 = BoxZone:Create(vector3(149.22, -1040.5, 29.37), 2.95, 0.8, {
    name = "banking",
    heading = 70,
    minZ = 28.32,
    maxZ = 31.72,
    
})

local insidePinkCage = false
Citizen.CreateThread(function()
    while true do
        local plyPed = PlayerPedId()
        local coord = GetEntityCoords(plyPed)
        insidePinkCage = banka1:isPointInside(coord)
        insidePinkCage = banka2:isPointInside(coord)
        insidePinkCage = banka3:isPointInside(coord)
        insidePinkCage = banka4:isPointInside(coord)
        insidePinkCage = banka5:isPointInside(coord)
        insidePinkCage = banka6:isPointInside(coord)
        insidePinkCage = banka7:isPointInside(coord)
        insidePinkCage = banka8:isPointInside(coord)
        Citizen.Wait(500)
    end
end)

local listening = false
local function listenForKeypress()
    listening = true
    Citizen.CreateThread(function()
        while listening do
            if IsControlJustReleased(0, 38) then
                listening = false
                exports["fizzfau-ui"]:Clear("fizzfau-ui:drawthetextplease")
                TriggerEvent("rpl:open-bank")
            end
            Wait(0)
        end
    end)
end

banka1:onPointInOut(PolyZone.getPlayerPosition, function(isPointInside, point)
    if isPointInside then
        exports["fizzfau-ui"]:DrawNotify("fizzfau-ui:drawthetextplease", "[E] Banka", "#313131", "fas fa-university")
        listenForKeypress()
    else
        exports["fizzfau-ui"]:Clear("fizzfau-ui:drawthetextplease")
    end
end)

banka2:onPointInOut(PolyZone.getPlayerPosition, function(isPointInside, point)
    if isPointInside then
        exports["fizzfau-ui"]:DrawNotify("fizzfau-ui:drawthetextplease", "[E] Banka", "#313131", "fas fa-university")
        listenForKeypress()
    else
        exports["fizzfau-ui"]:Clear("fizzfau-ui:drawthetextplease")
    end
end)

banka3:onPointInOut(PolyZone.getPlayerPosition, function(isPointInside, point)
    if isPointInside then
        exports["fizzfau-ui"]:DrawNotify("fizzfau-ui:drawthetextplease", "[E] Banka", "#313131", "fas fa-university")
        listenForKeypress()
    else
        exports["fizzfau-ui"]:Clear("fizzfau-ui:drawthetextplease")
    end
end)

banka4:onPointInOut(PolyZone.getPlayerPosition, function(isPointInside, point)
    if isPointInside then
        exports["fizzfau-ui"]:DrawNotify("fizzfau-ui:drawthetextplease", "[E] Banka", "#313131", "fas fa-university")
        listenForKeypress()
    else
        exports["fizzfau-ui"]:Clear("fizzfau-ui:drawthetextplease")
    end
end)

banka5:onPointInOut(PolyZone.getPlayerPosition, function(isPointInside, point)
    if isPointInside then
        exports["fizzfau-ui"]:DrawNotify("fizzfau-ui:drawthetextplease", "[E] Banka", "#313131", "fas fa-university")
        listenForKeypress()
    else
        exports["fizzfau-ui"]:Clear("fizzfau-ui:drawthetextplease")
    end
end)

banka6:onPointInOut(PolyZone.getPlayerPosition, function(isPointInside, point)
    if isPointInside then
        exports["fizzfau-ui"]:DrawNotify("fizzfau-ui:drawthetextplease", "[E] Banka", "#313131", "fas fa-university")
        listenForKeypress()
    else
        exports["fizzfau-ui"]:Clear("fizzfau-ui:drawthetextplease")
    end
end)

banka7:onPointInOut(PolyZone.getPlayerPosition, function(isPointInside, point)
    if isPointInside then
        exports["fizzfau-ui"]:DrawNotify("fizzfau-ui:drawthetextplease", "[E] Banka", "#313131", "fas fa-university")
        listenForKeypress()
    else
        exports["fizzfau-ui"]:Clear("fizzfau-ui:drawthetextplease")
    end
end)

banka8:onPointInOut(PolyZone.getPlayerPosition, function(isPointInside, point)
    if isPointInside then
        exports["fizzfau-ui"]:DrawNotify("fizzfau-ui:drawthetextplease", "[E] Banka", "#313131", "fas fa-university")
        listenForKeypress()
    else
        exports["fizzfau-ui"]:Clear("fizzfau-ui:drawthetextplease")
    end
end)

-- Leakleyen orospu evladıdır
-- Leaklemeye götü yiyen yoktur.