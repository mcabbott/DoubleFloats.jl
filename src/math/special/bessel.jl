besselj0(x::Double64) = Double64Float128(besselj0, x)
besselj1(x::Double64) = Double64Float128(besselj1, x)
bessely0(x::Double64) = Double64Float128(bessely0, x)
bessely1(x::Double64) = Double64Float128(bessely1, x)
besselj(n::Integer, x::Double64) = Double64(besselj(n, Float128(x))
bessely(n::Integer, x::Double64) = Double64(bessely(n, Float128(x))

besselj0(x::Double32) = Double32Float128(besselj0, x)
besselj1(x::Double32) = Double32Float128(besselj1, x)
bessely0(x::Double32) = Double32Float128(bessely0, x)
bessely1(x::Double32) = Double32Float128(bessely1, x)
besselj(n::Integer, x::Double32) = Double32(besselj(n, Float128(x))
bessely(n::Integer, x::Double32) = Double32(bessely(n, Float128(x))

besselj0(x::Double16) = Double16Float128(besselj0, x)
besselj1(x::Double16) = Double16Float128(besselj1, x)
bessely0(x::Double16) = Double16Float128(bessely0, x)
bessely1(x::Double16) = Double16Float128(bessely1, x)
besselj(n::Integer, x::Double16) = Double16(besselj(n, Float128(x))
bessely(n::Integer, x::Double16) = Double16(bessely(n, Float128(x))
