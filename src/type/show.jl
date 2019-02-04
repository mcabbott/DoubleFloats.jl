function show(io::IO, x::DoubleFloat{T}) where {T<:IEEEFloat}
    compact = get(io, :compact, true)
    if compact
        str = string(x.hi)
    else
        str = string(x)
    end
    print(io, str)
end

function show(io::IO, x::Complex{DoubleFloat{T}}) where {T<:IEEEFloat}
    compact = get(io, :compact, true)
    if compact
        str = string(x.re.hi, (signbit(x.im.hi) ? " - " : " + "), abs(x.im.hi), "im")
    else
        str = string(x.re, (signbit(x.im.hi) ? " - " : " + "), abs(x.im), "im")
    end
    print(io, str)
end


show(x::DoubleFloat{T}) where {T<:IEEEFloat} = show(Base.stdout, x)

show(x::Complex{DoubleFloat{T}}) where {T<:IEEEFloat} = show(Base.stdout, x)


function showtyped(io::IO, x::DoubleFloat{T}) where {T<:IEEEFloat}
    str = stringtyped(x)
    print(io, str)
end

showtyped(x::DoubleFloat{T}) where {T<:IEEEFloat} = showtyped(Base.stdout, x)

showtyped(x::Complex{DoubleFloat{T}}) where {T<:IEEEFloat} = showtyped(Base.stdout, x)
