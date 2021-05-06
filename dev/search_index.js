var documenterSearchIndex = {"docs":
[{"location":"IID Matrices/#Matrices-with-IID-Entries","page":"I.I.D. entries","title":"Matrices with IID Entries","text":"","category":"section"},{"location":"IID Matrices/#Diagonal-Matrices","page":"I.I.D. entries","title":"Diagonal Matrices","text":"","category":"section"},{"location":"IID Matrices/","page":"I.I.D. entries","title":"I.I.D. entries","text":"randDiagonal","category":"page"},{"location":"IID Matrices/#RandomMatrix.randDiagonal","page":"I.I.D. entries","title":"RandomMatrix.randDiagonal","text":"randDiagonal(d, n) \n\nrandDiagonal(n) \n\nd : default Normal(), entry distribution\nn : dimension\n\n# Examples\n\n# generates a 3 by 3 diagonal matrix, with non-zero elements from `Normal(0,1)`\nrandDiagonal(3)\n3×3 Diagonal{Float64, Vector{Float64}}:\n 0.440359   ⋅         ⋅\n  ⋅        1.94832    ⋅\n  ⋅         ⋅       -0.52536\n\n# generates a 5 by 5 diagonal matrix, with non-zero elements from `Poisson(2)`\njulia> randDiagonal(Poisson(2),5)\n5×5 Diagonal{Int64, Vector{Int64}}:\n 1  ⋅  ⋅  ⋅  ⋅\n ⋅  0  ⋅  ⋅  ⋅\n ⋅  ⋅  0  ⋅  ⋅\n ⋅  ⋅  ⋅  3  ⋅\n ⋅  ⋅  ⋅  ⋅  3\n\n\n\n\n\n","category":"function"},{"location":"IID Matrices/#TriangularMatrices","page":"I.I.D. entries","title":"TriangularMatrices","text":"","category":"section"},{"location":"IID Matrices/","page":"I.I.D. entries","title":"I.I.D. entries","text":"randTriangular","category":"page"},{"location":"IID Matrices/#RandomMatrix.randTriangular","page":"I.I.D. entries","title":"RandomMatrix.randTriangular","text":"randTriangular(d , n ;  diag , Diag, upper ) \n\nrandTriangular(n;diag, upper)\n\nd : entry distribution\nn : dimension\ndiag : default diag = d, diagonal entry distribution\nDiag : default Diag = true, true includes diagonal, false with diagonal entries 0\nupper : default upper = true, true gives upper triangular, false gives lower triangular\n\n# Examples \n\n# Generate an upper triangular matrix with entries Standard Normal\njulia> randTriangular(3)\n3×3 UpperTriangular{Float64, Matrix{Float64}}:\n -0.572757  -0.459518   -1.60622\n   ⋅         0.0216834  -0.416529\n   ⋅          ⋅         -1.00807\n\n# Generate a 3 by 3 strictly lower triangular matrix, with nonzero entries uniform from ``\\{1,2,3\\}`` \njulia> randTriangular(1:3,3,upper=false,Diag=false)\n3×3 LowerTriangular{Int64, Transpose{Int64, Matrix{Int64}}}: \n 0  ⋅  ⋅\n 3  0  ⋅\n 3  2  0\n\n\n\n\n\n\n","category":"function"},{"location":"IID Matrices/#Full-Matrices","page":"I.I.D. entries","title":"Full Matrices","text":"","category":"section"},{"location":"IID Matrices/","page":"I.I.D. entries","title":"I.I.D. entries","text":"randMatrix","category":"page"},{"location":"IID Matrices/#RandomMatrix.randMatrix","page":"I.I.D. entries","title":"RandomMatrix.randMatrix","text":"randMatrix(d::D, n::Int, m = n::Int; norm = false::Bool) where D<:S\n\nrandMatrix(n::Int, m = n::Int; norm = false::Bool)\n\nd : entry distribution\nn,m : default m = n , dimensions\n\nKeyword arguments:\n\nnorm : default false, if norm set to true, then the matrix will be normlaized with minnm^(-12).  \n\n# Examples\n\n# Generates a 2 by 2 random  matrix with entries from the Standard  Gaussian.\njulia> randMatrix(2)\n2×2 Matrix{Float64}:\n 1.74043  -1.30317\n 0.72765   0.639943\n\n# Generates a 3 by 2 random  matrix with entries uniformly from {1,2,3,...,10}.\njulia> randMatrix(1:10,3,2)\n3×2 Matrix{Int64}:\n  1  3\n  6  4\n 10  1\n\n# Generate a normalized random 2 by 2  Matrix with entries  `Poisson(2)` rvs. \n# Need to import the `Distributions` package for `Poisson(2)`\nrandMatrix(Poisson(2),2,norm = true)\n2×2 Matrix{Float64}:\n 1.41421   0.0\n 0.707107  1.41421\n\n\n\n\n\n","category":"function"},{"location":"IID Matrices/","page":"I.I.D. entries","title":"I.I.D. entries","text":"using Plots, RandomMatrix, LinearAlgebra\ngr() # hide\nPlots.reset_defaults() # hide\nN = 500\nM = randMatrix(N)\ncolors = [:red,:green,:blue,:purple]\n@gif for n = (1:50...,51:10:N...,N:-10:51...,50:1...)\n     \n    M[1:n,1:n]/sqrt(n)|>eigvals|>x->scatter(x,ylims=(-1.25,1.25), xlims=(-1.25,1.25),ratio=1,label=\"n = $(n)\",size=(800,800))\n\n    plot!([exp(θ*im) for θ=0:0.01:2pi],label=\"\",lw=3,c=[rand(colors) for _=0:0.01:2pi])\n        \n    title!(\"Circular Law for IID Matrices\")\n    \nend ","category":"page"},{"location":"Gallery/#font-colorred**Under-Construction**","page":"A Gallery of Random Matrix","title":"<font color=red>Under Construction","text":"","category":"section"},{"location":"Gallery/","page":"A Gallery of Random Matrix","title":"A Gallery of Random Matrix","text":"using Plots, RandomMatrix, LinearAlgebra, Distributions, Plots.PlotMeasures \ngr()  \nPlots.reset_defaults() \nN = 500\nM = randMatrix(N)\nH = randHermitian(N)\nU = randUnitary(N)\nl=@layout[c c; c c]\ncolors = [:red,:green,:blue,:purple]\n \nanim = @animate for n = (1:50...,51:10:N...,N:-10:51...,50:1...)\n     \n  p1 = M[1:n,1:n]/sqrt(n)|>eigvals|>x->scatter(x,ylims=(-1.25,1.25), xlims=(-1.25,1.25),ratio=1,label=\"n = $(n)\")\n        plot!([exp(θ*im) for θ=0:0.01:2pi],label=\"\",lw=3,c=[rand(colors) for _=0:0.01:2pi])\n        title!(\"Circular Law for IID Matrices\")\n    p3 = U[1:N-n÷2,1:N-n÷2]|>eigvals|>x->scatter(x,ylims=(-1.25,1.25), xlims=(-1.25,1.25),ratio=1,label=\"ratio = $(round((N-n÷3)/N,digits=2))\")\n        plot!([exp(θ*im) for θ=0:0.01:2pi],label=\"\",lw=3,c=[rand(colors) for _=0:0.01:2pi])\n        plot!(sqrt((N-n÷2)/N)*[exp(θ*im) for θ=0:0.01:2pi],label=\"\",lw=3,c=[rand(colors) for _=0:0.01:2pi],alpha=0.1)\n        title!(\"Circular Law for Truncated Unitary\")\n\n  p2 = H[1:n,1:n]/sqrt(n)|> eigvals|> x->histogram(x,norm=true, ylims=(0,1/pi+0.2), xlims=(-2.25,2.25),nbins = ceil(Int,sqrt(n)),label=\"n = $(n)\")\n        plot!(x->pdf(Semicircle(2),x),-2:0.01:2,lw=3,label=\"\",c=[rand(colors) for _=-2:0.01:2])\n        title!(\"Semicircle Law for Hermitian Matrices\")\n    \n    p4 = randEllipic(500,r=((N-2*n)/N)+0.0001,norm=true)|>eigvals|>x->scatter(x,ylims=(-2,2), xlims=(-2,2),ratio=1,label=\"ρ = $(round(((N-2*n)/N)+0.0001,digits=2))\")\n   title!(\"Elliptical Law\")\n  plot(p1,p2,p3,p4,size = (1000, 1000),axis=false)\nend \ngif(anim, \"testing1.gif\", fps = 10)","category":"page"},{"location":"Gallery/","page":"A Gallery of Random Matrix","title":"A Gallery of Random Matrix","text":"(Image: )","category":"page"},{"location":"#RandomMatrix.jl-Documentation","page":"Home","title":"RandomMatrix.jl Documentation","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"A package for Random Matrix Theory.","category":"page"},{"location":"","page":"Home","title":"Home","text":"Hoping to add-in enough functionalities and register in Aug 2021. If there is any functionality you want me to implement, please raise an issue.","category":"page"},{"location":"","page":"Home","title":"Home","text":"(Image: )","category":"page"},{"location":"Others/","page":"Under Construction","title":"Under Construction","text":"randHermitian\n\nrandSymmetric\n\nrandUnitary\n\nrandOrthogonal\n\nHaar\n\nrandPermutation\n\nrandEllipic\n\nresolvent\n\nComplexNormal\n\nGaussian\n\nMarchenkoPastur\n\n±","category":"page"},{"location":"Others/#RandomMatrix.randHermitian","page":"Under Construction","title":"RandomMatrix.randHermitian","text":"randHermitian(d::D, n::Int; Diag = d::D, norm = false::Bool) where T<:S\n\nrandHermitian(n::Int; norm = false::Bool)\n\nd : entry distribution\nn  : dimensions \nnorm : default is set to false, if norm set to true, then the matrix will be normalized with n^(-1/2).  \nDiag : the distribution for diagonal entries, by default Diag=d.    To use a different distribution (say Binomial) for digonal elements, set Diag = Binomial(1,0.5)\n\n# Examples\n\n# Generates a 2 by 2 random Hermitian matrix with entries from the Standard Complex Gaussian.\nrandHermitian(2)\n\n# Generate a random 2 by 2 Symmetric Matrix with entries  `Poisson(2)` rvs. \n# *Need to import the `Distributions` package for `Poisson(2)`*\nrandHermitian(Poisson(2),2)\n# or equivalently \nrandSymmetric(Poisson(2),2)\n\n# Entries uniformly from {1,2,3,...,10}\nrandHermitian(1:10,2)\n\n# Entries either -1 or pi with equal probability\nrandHermitian([-1,pi],2)\n\n\n\n\n\n","category":"function"},{"location":"Others/#RandomMatrix.randSymmetric","page":"Under Construction","title":"RandomMatrix.randSymmetric","text":"randSymmetric(d::D, n::Int; Diag = d::D,  norm = false::Bool) where T<:S\n\nrandSymmetric(n::Int; norm = false::Bool)\n\nd : entry distribution\nn : dimensions \nnorm : default is set to false, if norm set to true, then the matrix will be normalized with n^(-1/2).  \nDiag : the distribution for diagonal entries, by default Diag=d.    To use a different distribution (say Binomial) for digonal elements, set Diag = Binomial(1,0.5)\n\n# Examples\n\n# Generates a 2 by 2 random Symmetric matrix with entries from the Standard Gaussian.\nrandSymmetric(2)\n\n\n\n\n\n","category":"function"},{"location":"Others/#RandomMatrix.randUnitary","page":"Under Construction","title":"RandomMatrix.randUnitary","text":"randUnitary(n::Int)\n\nGenerates a n by n random Unitary matrix\nEquivalent to run rand(Haar(2,n))\nFor orthogonal matrices, use randOrthogonal or rand(Haar(1,n)) instead\n\n# Examples\n\n# Generate a 3 by 3 random Unitary matrix \nrandUnitary(3)\n# or\nrand(Haar(2,3)) \n\n\n\n\n\n","category":"function"},{"location":"Others/#RandomMatrix.randOrthogonal","page":"Under Construction","title":"RandomMatrix.randOrthogonal","text":"randOrthogonal(n::Int)\n\nGenerates a n by n random Orthogonal matrix\nEquivalent to run rand(Haar(1,n))\nFor unitary matrices, use randUnitary or rand(Haar(2,n)) instead\n\n# Examples\n\n# Generates a 3 by 3 random Orthogonal matrix \nrandOrthogonal(3)\n# or\nrand(Haar(1,3))\n\n\n\n\n\n","category":"function"},{"location":"Others/#RandomMatrix.Haar","page":"Under Construction","title":"RandomMatrix.Haar","text":"Haar(beta,n)\n\nUniform distribution on O(n) (beta = 1), U(n) (beta = 2)\nbeta: 1 for Orthogonal, 2 for Unitary\nn: dimension\n\n# Examples\n\n# Generate a 100 by 100 random Unitary Matrix uniformly from U(n)\nrand(Haar(2,100))\n\n\n# Generate a 100 by 100 random Orthogonal Matrix uniformly from O(n)\nrand(Haar(1,100))\n\n\n\n\n\n","category":"type"},{"location":"Others/#RandomMatrix.randPermutation","page":"Under Construction","title":"RandomMatrix.randPermutation","text":"randPermutation(n; fix) \n\nn : dimension\nfix : a keyword argument, default is set to fix = 0. If fix = x, randPermutation(n,x) will have atleast x fixed points\n\n# Examples \n\n# Generates a random 5 by 5 permutation matrix\nrandPermutation(5)\n\n# Generates  Generates a random 100 by 100 permutation matrix with atleast 10 fix points\nrandPermutation(100,fix=10)\n\n\n\n\n\n","category":"function"},{"location":"Others/#RandomMatrix.randEllipic","page":"Under Construction","title":"RandomMatrix.randEllipic","text":"randEllipic(d::D, n::Int; r = 0.5::Float64, Diag=d::T, norm = false::Bool) where  D<:S\n\nrandEllipic(n::Int; r=0.5::Float64, norm = false::Bool)\n\nd : default Normal(), entry distribution\nn  : dimensions \nr : default 0.5, the correlation of H_ijH_ji pairs\nnorm : default false, if norm set to true, then the matrix will be normalized with n^(-1/2).  \nDiag : default Diag=d, the distribution for diagonal entries.   To use a different distribution (say Binomial) for digonal elements, set Diag = Binomial(1,0.5)\n\n# Examples\n\n# Generate a normalized random elliptic matrix, with correlation 0.5\nA = randEllipic(500,norm=true)\n\n# Plot the eigenvalues of A, this should look like an ellipse\nA|>eigvals|>scatter\n\n# Generate a normalized random elliptic matrix, with entries `Poisson(10)` correlation 0.1\nusing Distributions\nrandEllipic(Poisson(10),500, r=0.1 , norm=true)\n\n\n\n\n\n","category":"function"},{"location":"Others/#RandomMatrix.resolvent","page":"Under Construction","title":"RandomMatrix.resolvent","text":"resolvent(A::Matrix)\n\nreturn the resolvent ***function*** of A, R(z)= (A-zI)^-1\n\n# Examples\n\n# This returns the resolvent **function** of a 500 by 500 Hermitian \nresolvent(randHermitian(500, norm = true)) # this is a generic function\n\n# One can use the above return as a function\nf = resolvent(randHermitian(500, norm = true))\nf(0+0.1im) # this returns a matrix\n\n\n\n\n\n","category":"function"},{"location":"Others/#RandomMatrix.ComplexNormal","page":"Under Construction","title":"RandomMatrix.ComplexNormal","text":"ComplexNormal(μ,σ)\n\nμ : mean, μ = 0 by default\nσ : standard deviation, σ  =1 by default\n\n# Examples\n\n# Generates 10 iid standard Complex Gaussian r.v.s\nrand(ComplexNormal(), 10) \n\n# Generates complex normal with mean 1+1im, variance 4\nrand(ComplexNormal(1+1im,2)) \n\n\n\n\n\n","category":"type"},{"location":"Others/#RandomMatrix.Gaussian","page":"Under Construction","title":"RandomMatrix.Gaussian","text":"Gaussian(beta,μ,σ)\n\nbeta : 1 (default) for Real Gaussian, 2 for Complex Gaussian \nμ : mean, μ = 0 by default\nσ : standard deviation, σ  =1 by default\n\n# Generates 10 iid standard normal r.v.s\nrand(Gaussian(), 10) \n\n# Generates a complex normal with mean 1+1im, variance 4\nrand(Gaussian(2,1+1im,2))\n\n\n\n\n\n","category":"type"},{"location":"Others/#RandomMatrix.MarchenkoPastur","page":"Under Construction","title":"RandomMatrix.MarchenkoPastur","text":"MarchenkoPastur(λ,σ)\n\nMarchenko-Pastur r.v. with  asymptotic ratio λ and scale parameter σ.\nλ by default is 0.5\nσ by default is 1, the value 1 for σ is typically used in Random Matrix Theory.\n\npdf(d::MarchenkoPastur,x::Real)  \n\n# Examples \n\n# Generate a MP rv with ρ = 0.5, σ =1\nrand(MarchenkoPastur()) \n\n# Generate a 100 by 100 matrix with entries i.i.d MP rvs with ρ=0.2\nrand(MarchenkoPastur(0.2),100,100)\n\n# Generate 100 MP rvs with ρ=0.1 and σ=2\nrand(MarchenkoPastur(0.1,2),100)\n\n# Compute the desity for the MP distribution with λ=1.6 at the point 0\npdf(MarchenkoPastur(1.6),0)\n\n\n\n\n\n","category":"type"},{"location":"Others/#RandomMatrix.:±","page":"Under Construction","title":"RandomMatrix.:±","text":"±(a,b)\n\nreturns (a-b,a+b)\n\n# Examples\n\n1 ± 0.5  # returns (0.5,1.5)\n\n\n\n\n\n","category":"function"}]
}
