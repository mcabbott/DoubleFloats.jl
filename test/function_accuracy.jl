setprecision(Base.BigFloat, 512)
srand(1602);
const nrands = 1_000 # tested with nrands = 1_000

rand_vals = rand(DoubleF64, nrands);
rand_bigf = Base.BigFloat.(rand_vals);

rand1_vals = rand_vals .+ 1.0;
rand1_bigf = Base.BigFloat.(rand1_vals);

rand20_vals = rand_vals .* 20.0;
rand20_bigf = Base.BigFloat.(rand20_vals);

function test_atol(big_rands, dbl_rands, fn, tol)
    T = eltype(dbl_rands)
    fn_big_rands = map(fn, big_rands)
    nansat1 = collect(1:length(fn_big_rands))[map(isnan, fn_big_rands)]
    fn_dblbig_rands = map(T, fn_big_rands)
    fn_dbl_rands = map(fn, dbl_rands)
    nansat2 = collect(1:length(fn_big_rands))[map(isnan, fn_dbl_rands)]
    nansat = unique(sort([nansat1..., nansat2...,]))
    nonnans = setdiff(Set(collect(1:length(fn_big_rands))), Set(nansat))
    nonnansat = collect(nonnans)
    fn_dblbig_rands = fn_dblbig_rands[nonnansat]
    fn_dbl_rands = fn_dbl_rands[nonnansat]
    fn_diff = map(abs, fn_dblbig_rands .- fn_dbl_rands)
    fn_res  = maximum(fn_diff) <= tol
    return fn_res
end


function test_rtol(big_rands, dbl_rands, fn, tol)
    T = eltype(dbl_rands)
    fn_big_rands = map(fn, big_rands)
    nansat1 = collect(1:length(fn_big_rands))[map(isnan, fn_big_rands)]
    fn_dblbig_rands = map(T, fn_big_rands)
    fn_dbl_rands = map(fn, dbl_rands)
    nansat2 = collect(1:length(fn_big_rands))[map(isnan, fn_dbl_rands)]
    nansat = unique(sort([nansat1..., nansat2...,]))
    nonnans = setdiff(Set(collect(1:length(fn_big_rands))), Set(nansat))
    nonnansat = collect(nonnans)
    fn_dblbig_rands = fn_dblbig_rands[nonnansat]
    fn_dbl_rands = fn_dbl_rands[nonnansat]
    fn_diff = map(abs, fn_dblbig_rands .- fn_dbl_rands)
    fn_reldiff = fn_diff ./ fn_dblbig_rands;
    fn_res  = maximum(fn_reldiff) <= tol
    return fn_res
end

  
@test test_atol(rand_bigf, rand_vals, exp, 1.0e-29)
@test test_rtol(rand_bigf, rand_vals, exp, 1.5e-31)

@test test_atol(rand_bigf, rand_vals, log, 1.0e-29)
@test test_rtol(rand_bigf, rand_vals, log, 1.5e-29)

@test test_atol(rand_bigf, rand_vals, sin, 1.0e-29)
@test test_rtol(rand_bigf, rand_vals, sin, 1.0e-30)

@test test_atol(rand_bigf, rand_vals, cos, 1.0e-29)
@test test_rtol(rand_bigf, rand_vals, cos, 1.0e-30)

@test test_atol(rand_bigf, rand_vals, tan, 1.0e-29)
@test test_rtol(rand_bigf, rand_vals, tan, 1.0e-30)

@test test_atol(rand_bigf, rand_vals, asin, 1.0e-29)
@test test_rtol(rand_bigf, rand_vals, asin, 1.0e-29)

@test test_atol(rand_bigf, rand_vals, acos, 1.0e-29)
@test test_rtol(rand_bigf, rand_vals, acos, 1.0e-29)

@test test_atol(rand_bigf, rand_vals, atan, 1.0e-29)
@test test_rtol(rand_bigf, rand_vals, atan, 1.0e-29)

@test test_atol(rand_bigf, rand_vals, sinh, 1.0e-29)
@test test_rtol(rand_bigf, rand_vals, sinh, 1.0e-28)

@test test_atol(rand_bigf, rand_vals, cosh, 1.0e-29)
@test test_rtol(rand_bigf, rand_vals, cosh, 1.0e-28)

@test test_atol(rand_bigf, rand_vals, tanh, 1.0e-29)
@test test_rtol(rand_bigf, rand_vals, tanh, 1.0e-28)

@test test_atol(rand_bigf, rand_vals, asinh, 1.0e-29)
@test test_rtol(rand_bigf, rand_vals, asinh, 1.0e-27)

@test test_atol(rand1_bigf, rand1_vals, acosh, 1.0e-29)
@test test_rtol(rand1_bigf, rand1_vals, acosh, 1.0e-27)

@test test_atol(rand_bigf, rand_vals, atanh, 1.0e-29)
@test test_rtol(rand_bigf, rand_vals, atanh, 1.0e-27)

  
@test test_atol(rand20_bigf, rand20_vals, exp, 1.0e-29)
@test test_rtol(rand20_bigf, rand20_vals, exp, 1.5e-31)

@test test_atol(rand20_bigf, rand20_vals, log, 1.0e-29)
@test test_rtol(rand20_bigf, rand20_vals, log, 1.5e-29)

@test test_atol(rand20_bigf, rand20_vals, sin, 1.0e-26)
@test test_rtol(rand20_bigf, rand20_vals, sin, 1.0e-27)

@test test_atol(rand20_bigf, rand20_vals, cos, 1.0e-26)
@test test_rtol(rand20_bigf, rand20_vals, cos, 1.0e-27)

@test test_atol(rand20_bigf, rand20_vals, tan, 1.0e-24)
@test test_rtol(rand20_bigf, rand20_vals, tan, 1.0e-27)

rand_vals = -rand_vals;
rand_bigf = BigFloat.(rand_vals);

rand1_vals = -rand1_vals;
rand1_bigf = BigFloat.(rand1_vals);

rand20_vals = -rand1_vals;
rand20_bigf = BigFloat.(rand20_vals);

@test test_atol(rand_bigf, rand_vals, exp, 1.0e-29)
@test test_rtol(rand_bigf, rand_vals, exp, 1.5e-31)

@test test_atol(rand_bigf, rand_vals, sin, 1.0e-29)
@test test_rtol(rand_bigf, rand_vals, sin, 1.0e-30)

@test test_atol(rand_bigf, rand_vals, cos, 1.0e-29)
@test test_rtol(rand_bigf, rand_vals, cos, 1.0e-30)

@test test_atol(rand_bigf, rand_vals, tan, 1.0e-29)
@test test_rtol(rand_bigf, rand_vals, tan, 1.0e-30)

@test test_atol(rand_bigf, rand_vals, asin, 1.0e-29)
@test test_rtol(rand_bigf, rand_vals, asin, 1.0e-29)

@test test_atol(rand_bigf, rand_vals, acos, 1.0e-29)
@test test_rtol(rand_bigf, rand_vals, acos, 1.0e-29)

@test test_atol(rand_bigf, rand_vals, atan, 1.0e-29)
@test test_rtol(rand_bigf, rand_vals, atan, 1.0e-29)

@test test_atol(rand_bigf, rand_vals, sinh, 1.0e-29)
@test test_rtol(rand_bigf, rand_vals, sinh, 1.0e-28)

@test test_atol(rand_bigf, rand_vals, cosh, 1.0e-29)
@test test_rtol(rand_bigf, rand_vals, cosh, 1.0e-28)

@test test_atol(rand_bigf, rand_vals, tanh, 1.0e-29)
@test test_rtol(rand_bigf, rand_vals, tanh, 1.0e-28)

@test test_atol(rand_bigf, rand_vals, asinh, 1.0e-29)
@test test_rtol(rand_bigf, rand_vals, asinh, 1.0e-27)

@test test_atol(rand_bigf, rand_vals, atanh, 1.0e-29)
@test test_rtol(rand_bigf, rand_vals, atanh, 1.0e-27)

  
@test test_atol(rand20_bigf, rand20_vals, exp, 1.0e-29)
@test test_rtol(rand20_bigf, rand20_vals, exp, 1.5e-31)

@test test_atol(rand20_bigf, rand20_vals, sin, 1.0e-26)
@test test_rtol(rand20_bigf, rand20_vals, sin, 1.0e-27)

@test test_atol(rand20_bigf, rand20_vals, cos, 1.0e-26)
@test test_rtol(rand20_bigf, rand20_vals, cos, 1.0e-27)

@test test_atol(rand20_bigf, rand20_vals, tan, 1.0e-24)
@test test_rtol(rand20_bigf, rand20_vals, tan, 1.0e-27)
