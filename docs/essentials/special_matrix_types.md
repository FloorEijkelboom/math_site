---
layout: default
parent: Linear Algebra
grand_parent: Essentials
nav_order: 4
title: Special Matrix Types
---


# Special matrix types

{: .motivation}
In this section, we will take a general overview of important matrix types that are often used in machine learning, and analyze their properties which make them useful. This section can be seen as a collection of important identities and properties of various matrix types. Many identities will be presented along with their proofs, which serve as a good exercise as they show typical tricks used in linear algebra. 

## Symmetric matrix


We say that matrix $$\mathbf{A}$$ is symmetric if it satisfies the following condition:
$$
\mathbf{A} = \mathbf{A}^{\text{T}}.
$$
If we denote the $$ij$$-th element of the matrix $$\mathbf{A}$$ as $$\text{A}_{ij}$$, then a symmetric matrix matrix satisfies $$\text{A}_{ij} = \text{A}_{ji}$$, for every $$i$$ and $$j$$. Symmetric matrices have some useful properties, some of which we will prove:

 - The sum of two symmetric matrices is also symmetric.

{: .proof}
>Let's assume that we have two symmetric matrices $$\mathbf{A}$$ and $$\mathbf{B}$$ and let's denote their sum as a matrix $$\mathbf{C} =\mathbf{A}+\mathbf{B}$$. Then, the matrix $$\mathbf{C}^{\text{T}}$$ is given by:
>
> $$\mathbf{C}^{\text{T}} = \left(\mathbf{A} + \mathbf{B} \right)^{\text{T}} =  \mathbf{A}^{\text{T}}+ \mathbf{B}^{\text{T}} = \mathbf{A} + \mathbf{B} = \mathbf{C}
    ,$$
>
> which means that the sum of two symmetric matrices is symmetric.

- A product of two symmetric matrices is not necessarily symmetric. 
For any integer $$n$$, the matrix $$\mathbf{A}^n$$ is symmetric if and only if $$\mathbf{A}$$ is symmetric. 
- If $$\mathbf{A}$$ is symmetric and invertible, then it's inverse $$\mathbf{A}^{-1}$$ is also symmetric. 
- Every symmetric matrix is diagonalizable. 
- Eigenvectors of the symmetric matrix are mutually orthogonal.


## Hermitian matrix
A hermitian matrix is analogous to a symmetric matrix but over a complex field. In other words, we call matrix $$\mathbf{A}$$ hermitian if it satisfies:
$$
\mathbf{A} = \mathbf{A}^{\dagger}
$$
In this notation, the symbol $$\dagger$$ unites the operation of transpose and complex conjugation[^1] (i.e. $$\text{A}_{ij} = \bar{\text{A}}_{ji}$$). Hermitian matrices have many similar properties to symmetric matrices. Specifically, all properties for symmetric matrices hold for hermitian matrices. We provide some additional useful properties:

- Diagonal elements of a hermitian matrix are real.

{: .proof}
Let's assume that matrix $$\mathbf{A}$$ is hermitian. We know that its elements are related by $$\text{A}_{ij} = \bar{\text{A}}_{ji}$$. For diagonal elements, it is then true that  $$\text{A}_{ii} = \bar{\text{A}}_{ii}$$. Therefore, the complex number is equal to its complex conjugate, and this is only true for real numbers (i.e. the imaginary part is equal to zero).

- The determinant of a hermitian matrix is real.

## Definite matrix
We call a matrix $$\mathbf{A}$$ a positive-definite, if the scalar number $$\mathbf{x}^\text{T}\mathbf{A}\mathbf{x}$$ is positive (not including zero) for any choice of the vector $$\mathbf{x}$$. Similarly, we call the matrix $$\mathbf{A}$$ a positive semi-definite matrix if the number $$\mathbf{x}^\text{T}\mathbf{A}\mathbf{x}$$ is positive or zero. We can similarly define the negative-definite and negative semi-definite matrices. Definite matrices are very important in optimization theory, and often come up in machine learning (for example, a covariance matrix is a positive semi-definite matrix). Some useful properties of definite matrices are as follows:

- If a matrices $$\mathbf{A}$$ and $$\mathbf{B}$$ are positive-definite, then their sum $$\mathbf{A} +\mathbf{B}$$ is also positive-definite. 
- If a matrices $$\mathbf{A}$$ and $$\mathbf{B}$$ are positive-definite, then the matrices $$\mathbf{A}\mathbf{B}\mathbf{A}$$ and $$\mathbf{B}\mathbf{A}\mathbf{B}$$ are also positive-definite.

## Orthogonal matrix
In linear algebra, an orthogonal (or often called orthonormal) matrix, is a real square matrix that satisfies the following condition:
$$
\mathbf{Q}\mathbf{Q}^{\text{T}} = \mathbf{Q}^{\text{T}}\mathbf{Q} = \mathbf{I}
$$
From this definition, we can directly see that the orthogonal matrix is the one whose inverse is its transpose:
$$
\mathbf{Q}^{-1} = \mathbf{Q}^{\text{T}}
$$
We will first describe some important properties of orthogonal matrices and then discuss their implications. 

- Any orthogonal matrix is invertible.
- A product of orthogonal matrices is also an orthogonal matrix.

{: .proof}
>Let's assume that we have two orthogonal matrices $$\mathbf{A}$$ and $$\mathbf{B}$$ and let's denote their product as a matrix $$\mathbf{C} =\mathbf{A}\mathbf{B}$$. To prove that the matrix $$\mathbf{C}$$ is also orthogonal, we need to show that $$\mathbf{C}\mathbf{C}^{\text{T}}$$ is equal to the identity matrix. We begin by using the definition of the matrix $$\mathbf{C}$$:
> 
>$$
    \mathbf{C}\mathbf{C}^{\text{T}} =\left(\mathbf{A}\mathbf{B}\right)\left(\mathbf{A}\mathbf{B}\right)^{\text{T}} = \mathbf{A}\mathbf{B}\mathbf{B}^{\text{T}}\mathbf{A}^{\text{T}} = \mathbf{A}\mathbf{I}\mathbf{A}^{\text{T}} =  \mathbf{A}\mathbf{A}^{\text{T}}= \mathbf{I}
$$


- The determinant of the orthogonal matrices is equal to $$1$$ or $$-1$$.

{: .proof}
>Let's assume that we have an orthogonal matrix $$\mathbf{Q}$$. Now, lets find the determinant of the the matrix $$\mathbf{Q}\mathbf{Q}^{\text{T}}$$:
> 
>$$
    \text{det}(\mathbf{Q}\mathbf{Q}^{\text{T}})= \text{det}(\mathbf{Q}) \, \text{det}(\mathbf{Q}^{\text{T}}) = \text{det}(\mathbf{Q})\, \text{det}(\mathbf{Q}) = \left[\det{\mathbf{Q}} \right]^2
$$
> 
>  On the other hand, we know that $$\mathbf{Q}\mathbf{Q}^{\text{T}} = \mathbf{I}$$, so we have:
> 
>$$
    \left[\det{\mathbf{Q}} \right]^2 = \text{det}(\mathbf{I})
$$
> 
> Since the determinant of the identity matrix is $$1$$, we automatically see that:
> 
>$$
     \left[\det{\mathbf{Q}} \right]^2 = 1 \Longrightarrow \text{det}(\mathbf{Q}) = \pm 1
$$

- Orthogonal matrices preserve lengths and angles. 

{: .proof}
>To begin, we will first prove that orthogonal matrices preserve lengths. Let's assume we have a vector $$\mathbf{v}$$, and we shall denote its norm as $$\left\lVert\mathbf{v}\right\rVert = \mathbf{v}^{\text{T}}\mathbf{v}$$. Let's assume that $$\mathbf{Q}$$ is an orthogonal matrix, and the transformed vector is $$\mathbf{v}' = \mathbf{Q}\mathbf{v}$$. Then, the norm $$\left\lVert\mathbf{v}'\right\rVert$$ is given by:
>
> $$
    \left\lVert\mathbf{v}'\right\rVert = \mathbf{v}'^{\text{T}}\mathbf{v}' =  \left(\mathbf{Q}\mathbf{v} \right)^{\text{T}}\left(\mathbf{Q}\mathbf{v} \right) =  \mathbf{v}^{\text{T}}\mathbf{Q}^{\text{T}}\mathbf{Q}\mathbf{v} =  \mathbf{v}^{\text{T}}\mathbf{v} = \left\lVert\mathbf{v}\right\rVert 
$$
>
> Thus, we see that the norm of the transformed vector is preserved. Next, let's assume that we have two vectors $$\mathbf{v}$$ and $$\mathbf{w}$$, and their transformed versions are $$\textbf{v}' =   \mathbf{Q}\mathbf{v}$$ and $$\mathbf{w}' = \mathbf{Q}\mathbf{w}$$. Let's denote the cosine of the angle between the two vectors $$\mathbf{v}$$ and $$\mathbf{w}$$ as $$\cos{\theta}$$, and the angle between the vectors $$\mathbf{v}'$$ and $$\mathbf{w}'$$ as $$\cos{\theta'}$$. The angle between the two transformed vectors is given by:
> 
> $$
    \begin{split}
    \cos{\theta'} &= \frac{\mathbf{v}'^{\text{T}}\mathbf{w}'}{ \left\lVert\mathbf{v}'\right\rVert \left\lVert\mathbf{w}'\right\rVert} \\[2.2mm]
    &=  \frac{\left( \mathbf{Q}\mathbf{v}\right)^{\text{T}}\left( \mathbf{Q}\mathbf{w}\right)}{ \left\lVert \mathbf{Q}\mathbf{v}\right\rVert \left\lVert  \mathbf{Q}\mathbf{w}\right\rVert} \\[2.2mm]
    &= \frac{ \mathbf{v}^{\text{T}}\mathbf{Q}^{\text{T}} \mathbf{Q}\mathbf{w}}{ \left\lVert\mathbf{v}\right\rVert \left\lVert  \mathbf{w}\right\rVert} \\[2.2mm]
     &= \frac{ \mathbf{v}^{\text{T}}\mathbf{w}}{ \left\lVert\mathbf{v}\right\rVert \left\lVert  \mathbf{w}\right\rVert} = \cos{\theta}
    \end{split}
$$
> 
>    In this proof, we used the previously proven fact that the norm remains unchanged under an orthogonal transformation. We see thus that the angle between two vectors remains the same. 

- Column/rows of the orthogonal matrix form an orthonormal basis of the Euclidean space $$\mathbb{R}^n$$. 

With these properties in mind, we can conclude that orthogonal matrices are rotations (in this case the determinant is $$1$$) or reflections (in this case the determinant is $$-1$$). Intuitively, if the transformation doesn't change the norm of the vector, this means that the vector is simply rotated or reflected, rather than also scaled. 

## Unitary matrix
Similarly to the orthogonal matrix, the complex square matrix $$\mathbf{U}$$ is said to be unitary if the following holds:
$$
\mathbf{U}\mathbf{U}^{\dagger} = \mathbf{U}^{\dagger}\mathbf{U} = \mathbf{U}\mathbf{U}^{-1} = \mathbf{I}
$$
Therefore, the unitary matrix is an analogous version of the orthogonal matrix for complex-valued matrices. All properties that hold true for the orthogonal matrices also analogously hold for unitary matrices. 

{: .summary}
This section provides an overview of important matrix types commonly used in machine learning, along with their properties. Symmetric and Hermitian matrices are introduced as matrices whose transpose is equal to the matrix itself, with both being diagonalizable. Definite matrices, including positive (negative) definite and positive (negative) semi-definite matrices, are important in optimization theory and machine learning. Orthogonal matrices are real square matrices that preserve lengths and angles, while unitary matrices are their complex-valued counterparts.

[^1]: If $$z$$ is a complex number in the form $$z=x+iy$$, then its complex conjugate is given by $$\bar{z}=x-iy$$.


