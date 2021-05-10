var documenterSearchIndex = {"docs":
[{"location":"IID Matrices/#Matrices-with-IID-Entries","page":"I.I.D. Matrices","title":"Matrices with IID Entries","text":"","category":"section"},{"location":"IID Matrices/#Diagonal-Matrices","page":"I.I.D. Matrices","title":"Diagonal Matrices","text":"","category":"section"},{"location":"IID Matrices/","page":"I.I.D. Matrices","title":"I.I.D. Matrices","text":"randDiagonal","category":"page"},{"location":"IID Matrices/#RandomMatrix.randDiagonal","page":"I.I.D. Matrices","title":"RandomMatrix.randDiagonal","text":"randDiagonal(d, n) \n\nrandDiagonal(n) \n\nd : default Normal(0，1), entry distribution\nn : dimension\n\nExamples\n\nGenerates a 3 by 3 diagonal matrix, with non-zero elements from Normal(0,1)\n\nrandDiagonal(3)\n\n3×3 Diagonal{Float64, Vector{Float64}}:\n 0.440359   ⋅         ⋅\n  ⋅        1.94832    ⋅\n  ⋅         ⋅       -0.52536\n\nGenerates a 5 by 5 diagonal matrix, with non-zero elements from Poisson(2)\n\nrandDiagonal(Poisson(2),5)\n\n5×5 Diagonal{Int64, Vector{Int64}}:\n 1  ⋅  ⋅  ⋅  ⋅\n ⋅  0  ⋅  ⋅  ⋅\n ⋅  ⋅  0  ⋅  ⋅\n ⋅  ⋅  ⋅  3  ⋅\n ⋅  ⋅  ⋅  ⋅  3\n\n\n\n\n\n","category":"function"},{"location":"IID Matrices/#TriangularMatrices","page":"I.I.D. Matrices","title":"TriangularMatrices","text":"","category":"section"},{"location":"IID Matrices/","page":"I.I.D. Matrices","title":"I.I.D. Matrices","text":"randTriangular","category":"page"},{"location":"IID Matrices/#RandomMatrix.randTriangular","page":"I.I.D. Matrices","title":"RandomMatrix.randTriangular","text":"randTriangular(d , n ;  diag , Diag, upper ) \n\nrandTriangular(n;diag, upper)\n\nd : entry distribution\nn : dimension\ndiag : default diag = d, diagonal entry distribution\nDiag : default Diag = true, true includes diagonal, false with diagonal entries 0\nupper : default upper = true, true gives upper triangular, false gives lower triangular\n\nExamples\n\nGenerate an upper triangular matrix with entries Standard Normal\n\nrandTriangular(3)\n\n3×3 UpperTriangular{Float64, Matrix{Float64}}:\n -0.572757  -0.459518   -1.60622\n   ⋅         0.0216834  -0.416529\n   ⋅          ⋅         -1.00807\n\nGenerate a 3 by 3 strictly lower triangular matrix, with nonzero entries uniform from 123 \n\nrandTriangular(1:3,3,upper=false,Diag=false)\n\n3×3 LowerTriangular{Int64, Transpose{Int64, Matrix{Int64}}}: \n 0  ⋅  ⋅\n 3  0  ⋅\n 3  2  0\n\n\n\n\n\n","category":"function"},{"location":"IID Matrices/#Full-Matrices","page":"I.I.D. Matrices","title":"Full Matrices","text":"","category":"section"},{"location":"IID Matrices/","page":"I.I.D. Matrices","title":"I.I.D. Matrices","text":"randMatrix","category":"page"},{"location":"IID Matrices/#RandomMatrix.randMatrix","page":"I.I.D. Matrices","title":"RandomMatrix.randMatrix","text":"randMatrix(d::D, n::Int, m = n::Int; norm = false::Bool) where D<:S\n\nrandMatrix(n::Int, m = n::Int; norm = false::Bool)\n\nd : entry distribution\nn,m : default m = n , dimensions\nnorm : default false, if norm set to true, then the matrix will be normlaized with operatornamemin(nm)^-12.  \n\nExamples\n\nGenerates a 2 by 2 random  matrix with entries from the Standard  Gaussian.\n\nrandMatrix(2)\n\n2×2 Matrix{Float64}:\n 1.74043  -1.30317\n 0.72765   0.639943\n\nGenerates a 3 by 2 random  matrix with entries uniformly from {1,2,3,...,10}.\n\nrandMatrix(1:10,3,2)\n\n3×2 Matrix{Int64}:\n  1  3\n  6  4\n 10  1\n\nGenerate a normalized random 2 by 2  Matrix with entries  Poisson(2) rvs.  Need to import the Distributions package for Poisson(2)\n\nusing Distributions\nrandMatrix(Poisson(2),2,norm = true)\n\n2×2 Matrix{Float64}:\n 1.41421   0.0\n 0.707107  1.41421\n\n\n\n\n\n","category":"function"},{"location":"IID Matrices/#RMT:-Circular-Law","page":"I.I.D. Matrices","title":"RMT: Circular Law","text":"","category":"section"},{"location":"IID Matrices/","page":"I.I.D. Matrices","title":"I.I.D. Matrices","text":"Let left(X_nright)_n=1^infty be a sequence of n times n matrix ensembles whose entries are i.i.d. copies of a complex random variable x with mean 0 and variance 1. Let lambda_1 ldots lambda_n 1 leq j leq n denote the eigenvalues of frac1sqrtn X_n. Define the empirical spectral measure of frac1sqrtn X_n as","category":"page"},{"location":"IID Matrices/","page":"I.I.D. Matrices","title":"I.I.D. Matrices","text":"mu_frac1sqrtn X_n(A)=n^-1 leftj leq n lambda_j in Aright quad A in mathcalB(mathbbC)","category":"page"},{"location":"IID Matrices/","page":"I.I.D. Matrices","title":"I.I.D. Matrices","text":"The circular law asserts that almost surely (i.e. with probability one), the sequence of measures mu frac1sqrtn X_n converges in distribution to the uniform measure on the unit disk.  For reference, see for example the paper by Terence Tao and Van Vu: RANDOM MATRICES: THE CIRCULAR LAW","category":"page"},{"location":"IID Matrices/","page":"I.I.D. Matrices","title":"I.I.D. Matrices","text":"using Plots, RandomMatrix, LinearAlgebra\ngr() # hide\nPlots.reset_defaults() # hide\nN = 500\nM = randMatrix(N)\ncolors = [:red,:green,:blue,:purple]\nanim = @animate for n = (1:50...,51:10:N...,N:-10:51...,50:1...)\n     \n    M[1:n,1:n]/sqrt(n)|>eigvals|>x->scatter(x,ylims=(-1.25,1.25), xlims=(-1.25,1.25),ratio=1,label=\"n = $(n)\",size=(600,600))\n\n    plot!([exp(θ*im) for θ=0:0.01:2pi],label=\"\",lw=3,c=[rand(colors) for _=0:0.01:2pi])\n        \n    title!(\"Circular Law for IID Matrices\")\n    \nend \ngif(anim, \"IID1.gif\", fps = 10); nothing","category":"page"},{"location":"IID Matrices/","page":"I.I.D. Matrices","title":"I.I.D. Matrices","text":"(Image: )","category":"page"},{"location":"Distributions/#Distributions","page":"Distributions","title":"Distributions","text":"","category":"section"},{"location":"Distributions/#Marchenko-Pastur","page":"Distributions","title":"Marchenko-Pastur","text":"","category":"section"},{"location":"Distributions/","page":"Distributions","title":"Distributions","text":"MarchenkoPastur","category":"page"},{"location":"Distributions/#Circular-Law","page":"Distributions","title":"Circular Law","text":"","category":"section"},{"location":"Distributions/","page":"Distributions","title":"Distributions","text":"Circular","category":"page"},{"location":"Distributions/#RandomMatrix.Circular","page":"Distributions","title":"RandomMatrix.Circular","text":"Circular(c=0,R=1)\n\nThe uniform distribution on the complex disk with center c and radius R\n\nrand(Circular(1,10),200)\n\nGenerates 200 uniform r.v.s on the complex disk of center 1 radius 10.\n\n\n\n\n\n","category":"type"},{"location":"Stochastic/#Stochastic-Matrices","page":"Stochastic Matrices","title":"Stochastic Matrices","text":"","category":"section"},{"location":"Stochastic/#randStochastic","page":"Stochastic Matrices","title":"randStochastic","text":"","category":"section"},{"location":"Stochastic/","page":"Stochastic Matrices","title":"Stochastic Matrices","text":"randStochastic","category":"page"},{"location":"Stochastic/#RandomMatrix.randStochastic","page":"Stochastic Matrices","title":"RandomMatrix.randStochastic","text":"randStochastic(n; type, norm)\n\nn: dimension\ntype : default type = 3, 3 for doubly randStochastic, 1 for row, 2 for column stochastic \nnorm : default false, if set to true, the matrix will be normalized by sqrtn (not a typo)\n\nExamples\n\nGenerates a 3 by 3 random doubly stochastic  matrix\n\nrandStochastic(3)\n\n3×3 Matrix{Float64}:\n 0.132593  0.216041  0.651367\n 0.484097  0.320777  0.195126\n 0.261495  0.537825  0.20068\n\nGenerates a 3 by 3 normalized random column stochastic  matrix\n\nrandStochastic(3,type=2,norm=true)\n\n3×3 Matrix{Float64}:\n 0.583396  0.608739  0.732921\n 0.672821  0.078786  0.302657\n 0.475834  1.04453   0.696473\n\n\n\n\n\n","category":"function"},{"location":"Stochastic/#RMT:-Circular-Law-for-Doubly-Stochastic-Random-Matrices","page":"Stochastic Matrices","title":"RMT: Circular Law for Doubly Stochastic Random Matrices","text":"","category":"section"},{"location":"Stochastic/","page":"Stochastic Matrices","title":"Stochastic Matrices","text":"Let X be a matrix sampled uniformly from the set of doubly stochastic matrices of size n times n. The empirical spectral distribution of the normalized matrix sqrtn(X-mathbfE X) converges almost surely to the circular law. For reference, see the paper by Hoi H. Nguyen Random doubly stochastic matrices: The circular law","category":"page"},{"location":"Stochastic/","page":"Stochastic Matrices","title":"Stochastic Matrices","text":"using Plots, RandomMatrix, LinearAlgebra\ngr() # hide\nPlots.reset_defaults() # hide\nN = 600\ncolors = [:red,:green,:blue,:purple]\nani = @animate for n = (1:50...,51:10:N...,N:-10:51...,50:1...)\n     \n    randStochastic(n,norm=true)|>eigvals|>x->scatter(x,ratio=1,xlims=(-1.5,1.5),title=\"Circular Law for Stochastic Matrices\",size=(600,600),label = \"n = $(n)\")\n\n    plot!([exp(θ*im) for θ=0:0.01:2pi],label=\"\",lw=3,c=[rand(colors) for _=0:0.01:2pi])\n        \nend \ngif(ani, \"St1.gif\", fps = 10); nothing","category":"page"},{"location":"Stochastic/","page":"Stochastic Matrices","title":"Stochastic Matrices","text":"(Image: )","category":"page"},{"location":"Patterned/#under-construction","page":"Patterned Matrices ","title":"under construction","text":"","category":"section"},{"location":"Patterned/","page":"Patterned Matrices ","title":"Patterned Matrices ","text":"randToeplitz","category":"page"},{"location":"Patterned/#RandomMatrix.randToeplitz","page":"Patterned Matrices ","title":"RandomMatrix.randToeplitz","text":"randToeplitz(d, n;  norm, hermitian)  where D<:S\n\nd : entry distribution\nn : dimension\nnorm : \n\n\n\n\n\n","category":"function"},{"location":"Patterned/","page":"Patterned Matrices ","title":"Patterned Matrices ","text":"randHankel","category":"page"},{"location":"Patterned/#RandomMatrix.randHankel","page":"Patterned Matrices ","title":"RandomMatrix.randHankel","text":"randHankel((1,im,pi),5)\n\n5×5 Matrix{Number}:\n  1   1  im  1   1\n  1  im   1  1   π\n im   1   1  π   π\n  1   1   π  π   π\n  1   π   π  π  im\n\n\n\n\n\n","category":"function"},{"location":"Gallery/","page":"Under Construction2","title":"Under Construction2","text":"\nusing Plots, RandomMatrix, LinearAlgebra, Distributions\ngr()  \nPlots.reset_defaults() \nN = 600\nM = randMatrix(N)\nU = randUnitary(N)\nl=@layout[c c; c c]\ncolors = [:red,:green,:blue,:purple]\n \nanim = @animate for n = (1:50...,51:10:N...,N:-10:51...,50:1...)\n     \n  p1 = M[1:n,1:n]/sqrt(n)|>eigvals|>x->scatter(x,ylims=(-1.25,1.25), xlims=(-1.25,1.25),ratio=1,label=\"n = $(n)\")\n        plot!([exp(θ*im) for θ=0:0.01:2pi],label=\"\",lw=3,c=[rand(colors) for _=0:0.01:2pi])\n        title!(\"Circular Law for IID Matrices\")\n    \n    p2 = U[1:N-n÷2,1:N-n÷2]|>eigvals|>x->scatter(x,ylims=(-1.25,1.25), xlims=(-1.25,1.25),ratio=1,label=\"ratio = $(round((N-n÷3)/N,digits=2))\")\n        plot!([exp(θ*im) for θ=0:0.01:2pi],label=\"\",lw=3,c=[rand(colors) for _=0:0.01:2pi])\n        plot!(sqrt((N-n÷2)/N)*[exp(θ*im) for θ=0:0.01:2pi],label=\"\",lw=3,c=[rand(colors) for _=0:0.01:2pi],alpha=0.1)\n        title!(\"Circular Law for Truncated Unitary\")\n\n    p3 = randStochastic(n,norm=true)|>eigvals|>x->scatter(x,ratio=1,xlims=(-1.5,1.5),title=\"Circular Law for Stochastic Matrices\",size=(600,600),label = \"n = $(n)\")\n\n    plot!([exp(θ*im) for θ=0:0.01:2pi],label=\"\",lw=3,c=[rand(colors) for _=0:0.01:2pi])\n    \n    p4 = randEllipic(500,r=((N-2*n)/N)+0.0001,norm=true)|>eigvals|>x->scatter(x,ylims=(-2,2), xlims=(-2,2),ratio=1,label=\"ρ = $(round(((N-2*n)/N)+0.0001,digits=2))\")\n   title!(\"Elliptical Law\")\n  plot(p1,p2,p3,p4,size = (1000, 1000),axis=false)\nend \ngif(anim, \"testing1.gif\", fps = 10)\n; nothing","category":"page"},{"location":"Gallery/","page":"Under Construction2","title":"Under Construction2","text":"(Image: )","category":"page"},{"location":"Hermitian/#Hermitian-and-Symmetric-Matrices","page":"Hermitian Matrices","title":"Hermitian and Symmetric Matrices","text":"","category":"section"},{"location":"Hermitian/#Hermitian","page":"Hermitian Matrices","title":"Hermitian","text":"","category":"section"},{"location":"Hermitian/","page":"Hermitian Matrices","title":"Hermitian Matrices","text":"randHermitian","category":"page"},{"location":"Hermitian/#RandomMatrix.randHermitian","page":"Hermitian Matrices","title":"RandomMatrix.randHermitian","text":"randHermitian(d, n; diag, norm )\n\nrandHermitian(n; norm)\n\nd : entry distribution\nn  : dimensions \nnorm : default false, if norm set to true, then the matrix will be normalized with n^-12.  \ndiag : default diag = d, diagonal entry distribution.    To use a different distribution (say Circular(2)) for digonal elements, set diag = Circular(2).     The diagonal entries will always be forced to have imgainary part 0.\n\nExamples\n\nGenerates a 2 by 2 random Hermitian matrix with off-diagonal entries from the Standard Complex Gaussian, and Standard Normal on the diagonal.\n\nrandHermitian(2)\n\n2×2 Hermitian{ComplexF64, Matrix{ComplexF64}}:\n  0.382095+0.0im        -0.708469-0.0636734im\n -0.708469+0.0636734im   0.336952+0.0im\n\nGenerate a 3 by 3 Hermitian matrix, with off-diagonal entries Circular(1) and diagonal entries uniformly -1 or 1.\n\nrandHermitian(Circular(1),3,diag = (-1,1))\n\n3×3 Hermitian{ComplexF64, Matrix{ComplexF64}}:\n     1.0+0.0im       1.56259-0.676099im  1.39468-0.295073im\n 1.56259+0.676099im     -1.0+0.0im       1.53369+0.296583im\n 1.39468+0.295073im  1.53369-0.296583im     -1.0+0.0im\n\nGenerate a random 2 by 2 Symmetric Matrix with entries  Poisson(2) rvs.  This is also be done with randSymmetric(Poisson(2),3)\n\nrandHermitian(Poisson(2),3)\n\n3×3 Hermitian{Int64, Matrix{Int64}}:\n 3  1  0\n 1  1  2\n 0  2  1\n\nEntries uniformly from 12310\n\nrandHermitian(1:10,2)\n\n2×2 Hermitian{Int64, Matrix{Int64}}:\n 10  7\n  7  6\n\nEntries either -1 or pi with equal probability\n\nrandHermitian([-1,pi],3)\n\n3×3 Hermitian{Float64, Matrix{Float64}}:\n  3.14159  -1.0      -1.0\n -1.0      -1.0       3.14159\n -1.0       3.14159   3.14159\n\n\n\n\n\n","category":"function"},{"location":"Hermitian/#GUE","page":"Hermitian Matrices","title":"GUE","text":"","category":"section"},{"location":"Hermitian/","page":"Hermitian Matrices","title":"Hermitian Matrices","text":"GUE","category":"page"},{"location":"Hermitian/#RandomMatrix.GUE","page":"Hermitian Matrices","title":"RandomMatrix.GUE","text":"GUE <: ContinuousMatrixDistribution\nGUE(n)\n\nn : dimension\nThe Gaussian Unitary Ensemble (GUE) is an ensemble of random n times n Hermitian matrices    M_n in which the upper-triangular entries are iid with distribution N(01)_mathbfC,    and the diagonal entries are iid with distribution N(01)_mathbfR, and independent of the upper-triangular ones\n\nrand(M::GUE, norm::bool) \n\nnorm : default false,  if norm set to true, then the matrix will be normlaized with operatornamemin(nm)^-12.  \n\nExamples\n\nGenerate a 3 by 3 random matrix from GUE(3)\n\nrand(GUE(3))\n\n3×3 Hermitian{ComplexF64, Matrix{ComplexF64}}:\n -0.883413+0.0im         1.09872+0.874884im     -0.1985-1.04778im\n   1.09872-0.874884im    1.55483+0.0im        -0.488532+1.18694im\n   -0.1985+1.04778im   -0.488532-1.18694im   -0.0823873+0.0im\n\nrand(GUE(2),norm=true)\n2×2 Hermitian{ComplexF64, Matrix{ComplexF64}}:\n -0.457089+0.0im       -0.672713-0.102234im\n -0.672713+0.102234im   0.380126+0.0im\n\n\n\n\n\n","category":"type"},{"location":"Hermitian/#Symmetric","page":"Hermitian Matrices","title":"Symmetric","text":"","category":"section"},{"location":"Hermitian/","page":"Hermitian Matrices","title":"Hermitian Matrices","text":"randSymmetric","category":"page"},{"location":"Hermitian/#RandomMatrix.randSymmetric","page":"Hermitian Matrices","title":"RandomMatrix.randSymmetric","text":"randSymmetric(d, n; Diag, norm) \n\nrandSymmetric(n; norm)\n\nd : entry distribution\nn : dimensions \nnorm : default  false, if norm set to true, then the matrix will be normalized with n^-12.   \ndiag : default diag = d, the distribution for diagonal entries.    To use a different distribution (say Binomial) for digonal elements, set diag = Binomial(1,0.5)\n\nExamples\n\nGenerates a 3 by 3 random Symmetric matrix with entries from the Standard Gaussian.\n\nrandSymmetric(3)\n\n3×3 Symmetric{Float64, Matrix{Float64}}:\n -0.230698  -1.72846     0.306362\n -1.72846    0.0845915  -0.0116108\n  0.306362  -0.0116108  -0.559046\n\n\n\n\n\n","category":"function"},{"location":"Hermitian/#GOE","page":"Hermitian Matrices","title":"GOE","text":"","category":"section"},{"location":"Hermitian/","page":"Hermitian Matrices","title":"Hermitian Matrices","text":"GOE","category":"page"},{"location":"Hermitian/#RandomMatrix.GOE","page":"Hermitian Matrices","title":"RandomMatrix.GOE","text":"GOE <: ContinuousMatrixDistribution\nGOE(n) \n\nn : dimension\nThe Gaussian Orthogonal Ensemble (GOE) is an ensemble of random n times n Symmetric matrices    M_n in which the upper-triangular entries are iid with distribution N(01)_mathbfR,    and the diagonal entries are iid with distribution N(02)_mathbfR, and independent of the upper-triangular ones\n\nrand(M::GOE, norm::bool)\n\nnorm : default false,  if norm set to true, then the matrix will be normlaized with operatornamemin(nm)^-12.  \n\nExamples\n\nGenerate a 3 by 3 random matrix from GOE(3)\n\nrand(GOE(3))\n\n3×3 Symmetric{Float64, Matrix{Float64}}:\n -1.62391   -0.451433    0.863883\n -0.451433   0.0271799  -0.524854\n  0.863883  -0.524854   -0.00930624\n\nrand(GOE(3),norm=true)\n\n3×3 Symmetric{Float64, Matrix{Float64}}:\n  0.302141   0.152634   -0.711679\n  0.152634  -0.0629327   0.103075\n -0.711679   0.103075    1.51861\n\n\n\n\n\n","category":"type"},{"location":"Hermitian/#RMT:-Semicircle-Law","page":"Hermitian Matrices","title":"RMT: Semicircle Law","text":"","category":"section"},{"location":"Hermitian/","page":"Hermitian Matrices","title":"Hermitian Matrices","text":"using Plots, RandomMatrix, LinearAlgebra, Distributions\n\nN = 600\nH = randHermitian(N)\n\ncolors = [:red,:green,:blue,:purple]\nani = @animate for n = (1:50...,51:10:N...,N:-10:51...,50:1...)\n\nH[1:n,1:n]/sqrt(n)|> eigvals|> x->histogram(x,norm=true, ylims=(0,1/pi+0.2), xlims=(-2.25,2.25),nbins = 100,label=\"n = $(n)\")\n        plot!(x->pdf(Semicircle(2),x),-2:0.01:2,lw=3,label=\"\",c=[rand(colors) for _=-2:0.01:2])\n        title!(\"Semicircle Law for Hermitian Matrices\")\n\nend \ngif(ani, \"H1.gif\", fps = 10); nothing","category":"page"},{"location":"Hermitian/","page":"Hermitian Matrices","title":"Hermitian Matrices","text":"(Image: )","category":"page"},{"location":"Unitary/#under-construction","page":"Unitary Matrices","title":"under construction","text":"","category":"section"},{"location":"Unitary/","page":"Unitary Matrices","title":"Unitary Matrices","text":"randUnitary","category":"page"},{"location":"Unitary/#RandomMatrix.randUnitary","page":"Unitary Matrices","title":"RandomMatrix.randUnitary","text":"randUnitary(n::Int)\n\nGenerates a n by n random Unitary matrix\nEquivalent to run rand(Haar(2,n))\nFor orthogonal matrices, use randOrthogonal or rand(Haar(1,n)) instead\n\n# Examples\n\n# Generate a 3 by 3 random Unitary matrix \nrandUnitary(3)\n# or\nrand(Haar(2,3)) \n\n\n\n\n\n","category":"function"},{"location":"Unitary/","page":"Unitary Matrices","title":"Unitary Matrices","text":"randOrthogonal","category":"page"},{"location":"Unitary/#RandomMatrix.randOrthogonal","page":"Unitary Matrices","title":"RandomMatrix.randOrthogonal","text":"randOrthogonal(n::Int)\n\nGenerates a n by n random Orthogonal matrix\nEquivalent to run rand(Haar(1,n))\nFor unitary matrices, use randUnitary or rand(Haar(2,n)) instead\n\n# Examples\n\n# Generates a 3 by 3 random Orthogonal matrix \nrandOrthogonal(3)\n# or\nrand(Haar(1,3))\n\n\n\n\n\n","category":"function"},{"location":"Unitary/","page":"Unitary Matrices","title":"Unitary Matrices","text":"Haar","category":"page"},{"location":"Unitary/#RandomMatrix.Haar","page":"Unitary Matrices","title":"RandomMatrix.Haar","text":"Haar(beta,n)\n\nUniform distribution on O(n) (beta = 1), U(n) (beta = 2)\nbeta: 1 for Orthogonal, 2 for Unitary\nn: dimension\n\n# Examples\n\n# Generate a 100 by 100 random Unitary Matrix uniformly from U(n)\nrand(Haar(2,100))\n\n\n# Generate a 100 by 100 random Orthogonal Matrix uniformly from O(n)\nrand(Haar(1,100))\n\n\n\n\n\n","category":"type"},{"location":"Unitary/","page":"Unitary Matrices","title":"Unitary Matrices","text":"randPermutation","category":"page"},{"location":"Unitary/#RandomMatrix.randPermutation","page":"Unitary Matrices","title":"RandomMatrix.randPermutation","text":"randPermutation(n; fix) \n\nn : dimension\nfix : a keyword argument, default is set to fix = 0. If fix = x, randPermutation(n,x) will have atleast x fixed points\n\n# Examples \n\n# Generates a random 5 by 5 permutation matrix\nrandPermutation(5)\n\n# Generates  Generates a random 100 by 100 permutation matrix with atleast 10 fix points\nrandPermutation(100,fix=10)\n\n\n\n\n\n","category":"function"},{"location":"#RandomMatrix.jl-Documentation","page":"Home","title":"RandomMatrix.jl Documentation","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"A package for Random Matrix Theory.","category":"page"},{"location":"","page":"Home","title":"Home","text":"The package currently is unregistered, you can only add it by","category":"page"},{"location":"","page":"Home","title":"Home","text":"using Pkg\nPkg.add(\"https://github.com/weiyang2048/RandomMatrix.jl\")","category":"page"},{"location":"","page":"Home","title":"Home","text":"I hope to add in enough functionalities and register it in Aug 2021. If there is any functionality you want me to implement, please raise an issue.","category":"page"},{"location":"","page":"Home","title":"Home","text":"(Image: )","category":"page"},{"location":"Others/","page":"Under Construction1","title":"Under Construction1","text":"randEllipic\n\nresolvent\n\nComplexNormal\n\nGaussian\n\n±","category":"page"},{"location":"Others/#RandomMatrix.randEllipic","page":"Under Construction1","title":"RandomMatrix.randEllipic","text":"randEllipic(d::D, n::Int; r = 0.5::Float64, Diag=d::T, norm = false::Bool) where  D<:S\n\nrandEllipic(n::Int; r=0.5::Float64, norm = false::Bool)\n\nd : default Normal(), entry distribution\nn  : dimensions \nr : default 0.5, the correlation of H_ijH_ji pairs\nnorm : default false, if norm set to true, then the matrix will be normalized with n^(-1/2).  \nDiag : default Diag=d, the distribution for diagonal entries.   To use a different distribution (say Binomial) for digonal elements, set Diag = Binomial(1,0.5)\n\n# Examples\n\n# Generate a normalized random elliptic matrix, with correlation 0.5\nA = randEllipic(500,norm=true)\n\n# Plot the eigenvalues of A, this should look like an ellipse\nA|>eigvals|>scatter\n\n# Generate a normalized random elliptic matrix, with entries `Poisson(10)` correlation 0.1\nusing Distributions\nrandEllipic(Poisson(10),500, r=0.1 , norm=true)\n\n\n\n\n\n","category":"function"},{"location":"Others/#RandomMatrix.resolvent","page":"Under Construction1","title":"RandomMatrix.resolvent","text":"resolvent(A::Matrix)\n\nreturn the resolvent ***function*** of A, R(z)= (A-zI)^-1\n\n# Examples\n\n# This returns the resolvent **function** of a 500 by 500 Hermitian \nresolvent(randHermitian(500, norm = true)) # this is a generic function\n\n# One can use the above return as a function\nf = resolvent(randHermitian(500, norm = true))\nf(0+0.1im) # this returns a matrix\n\n\n\n\n\n","category":"function"},{"location":"Others/#RandomMatrix.ComplexNormal","page":"Under Construction1","title":"RandomMatrix.ComplexNormal","text":"ComplexNormal(μ,σ)\n\nμ : mean, μ = 0 by default\nσ : standard deviation, σ  =1 by default\n\n# Examples\n\n# Generates 10 iid standard Complex Gaussian r.v.s\nrand(ComplexNormal(), 10) \n\n# Generates complex normal with mean 1+1im, variance 4\nrand(ComplexNormal(1+1im,2)) \n\n\n\n\n\n","category":"type"},{"location":"Others/#RandomMatrix.Gaussian","page":"Under Construction1","title":"RandomMatrix.Gaussian","text":"Gaussian(beta,μ,σ)\n\nbeta : 1 (default) for Real Gaussian, 2 for Complex Gaussian \nμ : mean, μ = 0 by default\nσ : standard deviation, σ  =1 by default\n\n# Generates 10 iid standard normal r.v.s\nrand(Gaussian(), 10) \n\n# Generates a complex normal with mean 1+1im, variance 4\nrand(Gaussian(2,1+1im,2))\n\n\n\n\n\n","category":"type"},{"location":"Others/#RandomMatrix.:±","page":"Under Construction1","title":"RandomMatrix.:±","text":"±(a,b)\n\nreturns (a-b,a+b)\n\n# Examples\n\n1 ± 0.5  # returns (0.5,1.5)\n\n\n\n\n\n","category":"function"}]
}
