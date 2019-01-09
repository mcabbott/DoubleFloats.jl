var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Home",
    "title": "Home",
    "category": "page",
    "text": ""
},

{
    "location": "#DoubleFloats-1",
    "page": "Home",
    "title": "DoubleFloats",
    "category": "section",
    "text": ""
},

{
    "location": "#Introduction-1",
    "page": "Home",
    "title": "Introduction",
    "category": "section",
    "text": "When you are using DoubleFloats, you have three more floating point types:Double64 is a magnitude ordered, nonoverlapping pair of Float64s\nDouble32 is a magnitude ordered, nonoverlapping pair of Float32s\nDouble16 is a magnitude ordered, nonoverlapping pair of Float16sMany arithmetic operations and elementary functions are available with each type.flipsign, copysign, signbit, sign, abs\n==, !=, <, <=, >=, >, isless, isequal\n+, -, *, /, ^, floor, ceil, trunc, round (to integer)\nsquare, cube, sqrt, cbrt\nhypot, normalize\nexp, expm1, log, log1p\nsin, cos, tan, csc, sec, cot\nasin, acos, atan, acsc, asec, acot\nsinh, cosh, tanh, csch, sech, coth\nasinh, acosh, atanh, acsch, asech, acothtodo: round (fractionally)\ntodo: elementary functions for Double32s directlyOverview\nCapabilities\nreference material"
},

{
    "location": "overview/#",
    "page": "Overview",
    "title": "Overview",
    "category": "page",
    "text": ""
},

{
    "location": "overview/#DoubleFloats.jl-1",
    "page": "Overview",
    "title": "DoubleFloats.jl",
    "category": "section",
    "text": ""
},

{
    "location": "overview/#Math-with-85-accurate-bits.-1",
    "page": "Overview",
    "title": "Math with 85+ accurate bits.",
    "category": "section",
    "text": ""
},

{
    "location": "overview/#[![Build-Status](https://travis-ci.org/JuliaMath/DoubleFloats.jl.svg?branchmaster)](https://travis-ci.org/JuliaMath/DoubleFloats.jl)-1",
    "page": "Overview",
    "title": "(Image: Build Status)",
    "category": "section",
    "text": ""
},

{
    "location": "overview/#Documentation-1",
    "page": "Overview",
    "title": "Documentation",
    "category": "section",
    "text": "Current &mdash; most recently tagged version of the documentation."
},

{
    "location": "overview/#Accuracy-1",
    "page": "Overview",
    "title": "Accuracy",
    "category": "section",
    "text": "results for f(x), x in 0..1function abserr relerr\nexp 1.0e-31 1.0e-31\nlog 1.0e-31 1.0e-31\n  \nsin 1.0e-31 1.0e-31\ncos 1.0e-31 1.0e-31\ntan 1.0e-31 1.0e-31\n  \nasin 1.0e-30 1.0e-30\nacos 1.0e-30 1.0e-29\natan 1.0e-31 1.0e-30\n  \n  \nsinh 1.0e-31 1.0e-29\ncosh 1.0e-31 1.0e-31\ntanh 1.0e-31 1.0e-29\n  \nasinh 1.0e-31 1.0e-29\natanh 1.0e-31 1.0e-30results for f(x), x in 1..2function abserr relerr notes\nexp 1.0e-30 1.0e-31 \nlog 1.0e-31 1.0e-31 \n   \nsin 1.0e-31 1.0e-31 \ncos 1.0e-31 1.0e-28 \ntan 1.0e-24 1.0e-28 near asymptote\n   \nasin 1.0e-30 1.0e-30 \nacos 1.0e-30 1.0e-29 \natan 1.0e-31 1.0e-30 \n   \n   \nsinh 1.0e-30 1.0e-31 \ncosh 1.0e-30 1.0e-31 \ntanh 1.0e-31 1.0e-31 \n   \nasinh 1.0e-31 1.0e-31 "
},

{
    "location": "overview/#Installation-1",
    "page": "Overview",
    "title": "Installation",
    "category": "section",
    "text": "pkg> add DoubleFloatsorjulia> using Pkg\njulia> Pkg.add(\"DoubleFloats\")"
},

{
    "location": "overview/#Examples-1",
    "page": "Overview",
    "title": "Examples",
    "category": "section",
    "text": ""
},

{
    "location": "overview/#Double64,-Double32,-Double16-1",
    "page": "Overview",
    "title": "Double64, Double32, Double16",
    "category": "section",
    "text": "julia> using DoubleFloats\n\njulia> dbl64 = sqrt(Double64(2)); 1 - dbl64 * inv(dbl64)\n0.0\njulia> dbl32 = sqrt(Double32(2)); 1 - dbl32 * inv(dbl32)\n0.0\njulia> dbl16 = sqrt(Double16(2)); 1 - dbl16 * inv(dbl16)\n0.0\n\njulia> typeof(ans) === Double16\ntruenote: floating-point constants must be used with care, they are evaluated as Float64 values before additional processingjulia> Double64(0.2)\n2.0000000000000001110223024625156540e-01\n\njulia> Double64(2)/10\n1.9999999999999999999999999999999937e-01\n\njulia> d64\"0.2\"\n1.9999999999999999999999999999999937e-01"
},

{
    "location": "overview/#show,-string,-parse-1",
    "page": "Overview",
    "title": "show, string, parse",
    "category": "section",
    "text": "julia> using DoubleFloats\n\njulia> x = sqrt(Double64(2)) / sqrt(Double64(6))\n0.5773502691896257\n\njulia> string(x)\n\"5.7735026918962576450914878050194151e-01\"\n\njulia> show(IOContext(Base.stdout,:compact=>false),x)\n5.7735026918962576450914878050194151e-01\n\njulia> showtyped(x)\nDouble64(0.5773502691896257, 3.3450280739356326e-17)\n\njulia> showtyped(parse(Double64, stringtyped(x)))\nDouble64(0.5773502691896257, 3.3450280739356326e-17)\n\njulia> Meta.parse(stringtyped(x))\n:(Double64(0.5773502691896257, 3.3450280739356326e-17))"
},

{
    "location": "overview/#golden-ratio-1",
    "page": "Overview",
    "title": "golden ratio",
    "category": "section",
    "text": "julia> using DoubleFloats\n\njulia> ϕ = Double32(MathConstants.golden)\n1.61803398874989490\njulia> phi = \"1.61803398874989484820+\"\njulia> ϕ⁻¹ = inv(ϕ)\n6.18033988749894902e-01\n\njulia> ϕ == 1 + ϕ⁻¹\ntrue\njulia> ϕ === ϕ * ϕ⁻¹ + ϕ⁻¹\ntruetyped value computed value ~abs(golden - computed)\nMathConstants.golden 1.6180339887498948482045868+ 0.0\nFloat64(MathConstants.golden) 1.618033988749895 1.5e-16\nDouble32(MathConstants.golden) 1.618033988749894_90 5.2e-17"
},

{
    "location": "overview/#Performance-1",
    "page": "Overview",
    "title": "Performance",
    "category": "section",
    "text": ""
},

{
    "location": "overview/#Double64-relative-to-BigFloat-1",
    "page": "Overview",
    "title": "Double64 relative to BigFloat",
    "category": "section",
    "text": "op speedup\n+ 11x\n* 18x\n\\ 7x\ntrig 3x-6xresults from testing with BenchmarkTools on one machine\nBigFloat precision was set to 106 bits, for fair comparison"
},

{
    "location": "overview/#Good-Ways-To-Use-This-1",
    "page": "Overview",
    "title": "Good Ways To Use This",
    "category": "section",
    "text": "In addition to simply using DoubleFloats and going from there, these two suggestions are easily managed and will go a long way in increasing the robustness of the work and reliability in the computational results.   If your input values are Float64s, map them to Double64s and proceed with your computation.  Then unmap your output values as Float64s, do additional work using those Float64s. With Float32 inputs, used Double32s similarly. Where throughput is important, and your algorithms are well-understood, this approach be used with the numerically sensitive parts of your computation only.  If you are doing that, be careful to map the inputs to those parts and unmap the outputs from those parts just as described above."
},

{
    "location": "overview/#Questions-and-Contributions-1",
    "page": "Overview",
    "title": "Questions and Contributions",
    "category": "section",
    "text": "Usage questions can be posted on the [Julia Discourse forum][discourse-tag-url].  Use the topic Numerics (a \"Discipline\") and a put the package name, DoubleFloats, in your question (\"topic\").Contributions are very welcome, as are feature requests and suggestions. Please open an [issue][issues-url] if you encounter any problems. The [contributing page][contrib-url] has a few guidelines that should be followed when opening pull requests.[contrib-url]: https://juliamath.github.io/DoubleFloats.jl/latest/man/contributing/ [discourse-tag-url]: https://discourse.julialang.org/tags/doublefloats [gitter-url]: https://gitter.im/juliamath/users[docs-current-img]: https://img.shields.io/badge/docs-latest-blue.svg [docs-current-url]: https://juliamath.github.io/DoubleFloats.jl[travis-img]: https://travis-ci.org/JuliaMath/DoubleFloats.jl.svg?branch=master [travis-url]: https://travis-ci.org/JuliaMath/DoubleFloats.jl[appveyor-img]: https://ci.appveyor.com/api/projects/status/xx7nimfpnl1r4gx0?svg=true [appveyor-url]: https://ci.appveyor.com/project/JuliaMath/doublefloats-jl[codecov-img]: https://codecov.io/gh/JuliaMath/DoubleFloats.jl/branch/master/graph/badge.svg [codecov-url]: https://codecov.io/gh/JuliaMath/DoubleFloats.jl[issues-url]: https://github.com/JuliaMath/DoubleFloats.jl/issues[pkg-0.6-img]: http://pkg.julialang.org/badges/DoubleFloats0.6.svg [pkg-0.6-url]: http://pkg.julialang.org/?pkg=DoubleFloats&ver=0.6 [pkg-0.7-img]: http://pkg.julialang.org/badges/DoubleFloats0.7.svg [pkg-0.7-url]: http://pkg.julialang.org/?pkg=DoubleFloats&ver=0.7"
},

{
    "location": "characteristics/#",
    "page": "Characteristics",
    "title": "Characteristics",
    "category": "page",
    "text": "This package provides extended precision versions of Float64, Float32, Float16.| type name   | significand precision | exponent precision | | base type |significand precision  | exponent precision | |:––––––|:––––––––––-:|:–––––––––:|-|:–––––|:––––––––––-:|:–––––––––:| | Double64  | 106 bits              | 11 bits            |◊| Float64 | 53 bits               | 11 bits            | | Double32  | &nbsp;48 bits         | &nbsp;8 bits       |◊| Float32 | 24 bits               | &nbsp;8 bits       | | Double16  | &nbsp;22 bits         | &nbsp;5 bits       |◊| Float16 | 11 bits               | &nbsp;5 bits       |arithmetic (+, -, *, /) is exact\nelementary functions are quite accurate\noften better than C \"double-double\" librariesFor Double64 arguments within 0.0..2.0    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; except tan(x), cot(x) as they approach ±Infexpect the abserr of elementary functions to be 1e-30 or less\nexpect the relerr of elementary functions to be 1e-28 or lessWhen used with reasonably sized values, expect successive DoubleFloat ops to add no more than 10⋅𝘂² to the cumulative relative error (𝘂 is the relative rounding unit, usually 𝘂 = eps(x)/2). Relative error can accrue steadily. After 100000 DoubleFloat ops with reasonably sized values, the relerr could approach 100000 * 10⋅𝘂². In practice these functions are considerably more resiliant: our algorithms come frome seminal papers and extensive numeric investigation.&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; should you encounter a situation where either error grows    strongly in one direction, please submit an issue"
},

{
    "location": "capabilities/#",
    "page": "Capabilities",
    "title": "Capabilities",
    "category": "page",
    "text": ""
},

{
    "location": "capabilities/#Capabilities-1",
    "page": "Capabilities",
    "title": "Capabilities",
    "category": "section",
    "text": ""
},

{
    "location": "capabilities/#predicates-1",
    "page": "Capabilities",
    "title": "predicates",
    "category": "section",
    "text": "Predicates are functions that ask \"yes or no\" questions of their argument[s].       You can ask of a number \"Is this zero?\" or \"Is this one?\" and these predicates     (iszero, isone) will work as expected with almost all numerical types.     The built-in numerical types let you query finiteness (isfinite, isinf).    These are the predicates made available for use with DoubleFloats:      iszero, isnonzero, isone                 #  value == 0, value != 0, value == 1\n  ispositive, isnegative,                  #  value >  0, value <  0\n  isnonnegative, isnonpositive,            #  value >= 0, value <= 0   \n  isinteger, isfractional,                 #  value == round(value)\n  issubnormal,                             #  zero(T) < abs(value) < floatmin(T)\n  isnormal,                                #  !isinf(value) && !isnan(value) && !issubnormal(value)\n  isfinite, isinf,                         #  abs(value) != Inf, abs(value) == Inf\n  isposinf, isneginf,                      #  value == Inf, value == -Inf\n  isnan                                    #  value is not a number (eg 0/0)"
},

{
    "location": "capabilities/#the-basic-arithmetic-operations-1",
    "page": "Capabilities",
    "title": "the basic arithmetic operations",
    "category": "section",
    "text": "addition, subtraction \nmultiplication, square, cube\nreciprocation, division, square root, cube rootThere are arithmetic operations that take two Float64s or Float32s or Float16s and return the corresponding Double64 or Double32 or Double16.  These operations are available in functional form as add2, sub2, mul2, div2 and in infix form using Unicode \\oplus \\ominus \\otimes \\oslash \"⊕ ⊖ ⊗ ⊘\"."
},

{
    "location": "capabilities/#rounding-1",
    "page": "Capabilities",
    "title": "rounding",
    "category": "section",
    "text": "RoundNearest, RoundUp, RoundDown\nRoundToZero, RoundFromZero"
},

{
    "location": "capabilities/#elementary-mathematical-functions-1",
    "page": "Capabilities",
    "title": "elementary mathematical functions",
    "category": "section",
    "text": "log, exp\nsin, cos, tan, csc, sec, cot\nasin, acos, atan, acsc, asec, acot\nsinh, cosh, tanh, csch, sech, coth\nasinh, acosh, atanh, acsch, asech, acoth"
},

{
    "location": "capabilities/#linear-algebra-1",
    "page": "Capabilities",
    "title": "linear algebra",
    "category": "section",
    "text": "isdiag, ishermitian, isposdef, issymmetric, istril, istriu\nnorm, det, dot, tr, condskeel, logdet, logabsdet\ntranspose, adjoint, tril, triu\ndiag, diagind\nfactorize, lu, lufact, qr, qrfact"
},

{
    "location": "capabilities/#also-1",
    "page": "Capabilities",
    "title": "also",
    "category": "section",
    "text": "random values in [0,1)"
},

{
    "location": "appropriate/#",
    "page": "Appropriate Uses",
    "title": "Appropriate Uses",
    "category": "page",
    "text": ""
},

{
    "location": "appropriate/#The-Types-1",
    "page": "Appropriate Uses",
    "title": "The Types",
    "category": "section",
    "text": ""
},

{
    "location": "appropriate/#Double64-1",
    "page": "Appropriate Uses",
    "title": "Double64",
    "category": "section",
    "text": "Double64 is the accuracy stalwart.  Very good values are likely to result.When used with reasonably sized values, the computations should limit the accrual of relative error to 10⋅𝘂², where 𝘂 is the relative rounding unit, the unitinthelastplace of the significand, often eps(x)/2. It is possible to accrue relative error steadily; so some experimentation has guided algorithmic selection. At worst, a sequence of 100000 arithmetic and elementary operations might admit a relative error of 100000 * 10⋅𝘂². The worst is unlikely.One right way to use this type is(a) map your input from Float64s to Double64s (b) compute with Double64s (c) map your resultant values from Double64s to Float64sThe values obtained with cascaded arithimetic and composed elementary functions are reliable and their utility is desireable."
},

{
    "location": "appropriate/#what-it-is-1",
    "page": "Appropriate Uses",
    "title": "what it is",
    "category": "section",
    "text": "What is that? 𝘂 is the last bit of the significand as a quantity, so a result that has a relative error of 1000000⋅𝘂 is as a report that the final ceil(Int, log2(1_000_000)) bits of the result\'s significand are to be treated as inexactness rather than quantification. That means, for a Float64 value (with a 53-bit significand) 53-20 bits remain reliable, while ~38% of the precision has become unavailable to applications involve other\'s health, wealth, and well-being that are shepherded by responsible persons."
},

{
    "location": "appropriate/#how-it-is-used-1",
    "page": "Appropriate Uses",
    "title": "how it is used",
    "category": "section",
    "text": "Were one working with Float32s (a 24-bit significand), the entire result would have become unreliable. With Double, the relative error accompanying any basic arithmetic operation is 10⋅𝘂² (10×𝘂^𝟐). It is reasonable to see this squaring as pulling in almost second significand\'s bits.  Our possibly accrued relative error does eat into the number of reliable bits in this second order significance. Nonetheless, if your use requires less than one million successive arithmetic operations, the result obtained is reliable as a Float64 or as a Float32.Capabilities\nreference material"
},

{
    "location": "references/#",
    "page": "Refs",
    "title": "Refs",
    "category": "page",
    "text": ""
},

{
    "location": "references/#References-1",
    "page": "Refs",
    "title": "References",
    "category": "section",
    "text": "[Double-Double Building Blocks]\nM. Joldes, V. Popescu, and J.M. Muller.\nTight and rigourous error bounds for basic building blocks of double-word arithmetic\n2016, working paper.&nbsp; &nbsp; &rarr;  https://hal.archives-ouvertes.fr/hal-01351529v2/document[Triple-Double Building Blocks]\nChristoph Quirin Lauter.\nBasic building blocks for a triple-double intermediate format\n2005, research report.&nbsp; &nbsp; &rarr;https://hal.inria.fr/inria-00070314/document[Multiple Precision]\nV. Popescu.\nTowards fast and certified multiple-precision librairies.\n2017, thesis.&nbsp; &nbsp; &rarr;  https://hal.archives-ouvertes.fr/tel-01534090/document      [mpfun]\nA Thread-Safe Arbitrary Precision Computation Package\nDavid H. Bailey ∗\nMarch 20, 2017&nbsp; &nbsp; &rarr;  http://www.davidhbailey.com/dhbpapers/mpfun2015.pdf     &nbsp; &nbsp; &rarr;  http://www.davidhbailey.com/dhbsoftware/mpfun-fort-v15.tar.gz     &nbsp; &nbsp; &rarr;  http://www.davidhbailey.com/dhbsoftware/mpfun-mpfr-v07.tar.gz[Faithful Floats]\nM. Lange and S.M. Rump.\nFaithfully Rounded Floating-point Computations\n2017, preprint.&nbsp; &nbsp; &rarr;  http://www.ti3.tu-harburg.de/paper/rump/LaRu2017b.pdf      Nelson H.F. Beebe\nThe Mathematical-Function Computation Handbook\nSpringer, 2017, book&nbsp;J.-M. Muller, N. Brisebarre, F. de Dinechin, C.-P. Jeannerod, V. Lefevre,\n    G. Melquiond, N. Revol, D. Stehle, and S. Torres.\nHandbook of Floating-Point Arithmetic\nBirkhauser Boston, 2010, book&nbsp;"
},

]}
