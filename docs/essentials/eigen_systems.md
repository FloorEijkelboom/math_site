---
layout: default
parent: Linear Algebra
grand_parent: Essentials
nav_order: 7
title: Eigensystems
---

# Eigensystems

{: .motivation}
We are often interested in vectors that are not affected by a transformation, and in this section we will find out how to find them and discuss some of their most important properties.

In linear algebra, eigensystems denote a set of problems that include finding eigenvectors and eigenvalues. 
The word _eigen_ comes from German and means 'own', which will make sense when we formulate the problem more concretely. 
Informally, the main idea behind eigensystems is finding vectors that transform in a special way when we apply a certain 
transformation $$A$$ on them. Specifically, we wish to find which vectors are affected the least by the transformation 
$$\mathbf{A}$$, and by least we mean that they are not rotated, but are only scaled by a factor $$\lambda$$. 
Formally, given a vector $$\mathbf{v}$$ and a transformation $$\mathbf{A}$$, this requirement can be written as:

$$\mathbf{A}\mathbf{v} = \lambda \mathbf{v}$$

Since on the right-hand side we multiply a vector by a scalar, we can equivalently add the identity matrix as 
$$\lambda \rightarrow \mathbf{I}\lambda$$. Rearranging terms gives us the following equation:

$$\left( \mathbf{A} -\lambda \mathbf{I}\right)\mathbf{v} = 0$$

Assuming that $$\mathbf{A}\in \mathbb{R}^{n\times n}$$, and $$\mathbf{v}\in \mathbb{R}^n$$, we can rewrite the former 
equation in an expanded form:


$$\begin{bmatrix}
   (\text{A}_{11} - \lambda) & \text{A}_{12} & \cdots & \text{A}_{1n} \\
   \text{A}_{21} & (\text{A}_{22}-\lambda) & \cdots & \text{A}_{2n} \\
   \vdots  & \vdots  & \ddots & \vdots  \\
   \text{A}_{n1} & \text{A}_{n2} & \cdots & (\text{A}_{nn}-\lambda )
 \end{bmatrix}
  \begin{bmatrix}
 v_1 \\
 \vdots \\
 \vdots \\
 v_n
 \end{bmatrix} =   \begin{bmatrix}
 0\\
 \vdots \\
 \vdots \\
 0
 \end{bmatrix}.$$

The equation above represents a system of linear equations, and the goal is to find vectors $$\mathbf{v} = \begin{bmatrix}v_1, \cdots, v_n]\end{bmatrix}^{\text{T}}$$ 
and $$\lambda$$ that satisfy it. For example, the $$m$$-th equation is given by:

$$\text{A}_{m1} v_1 + \cdots + \left(\text{A}_{mm}-\lambda\right) v_m + \cdots + \text{A}_{mn}v_n = 0.$$

What we can see is that in every equation, we have all the unknowns (elements of the vector $$\mathbf{v}$$). 
Therefore, if the equations are linearly independent[^1], the only solution is the trivial one, i.e. 
$$v_1 = v_2 = \cdots = v_n = 0$$. Although this is a plausible solution, it is not very informative, 
as it just tells us that if we take a null vector and apply an arbitrary transformation, it will remain a null vector, 
which is a trivial statement. 

The second option is that the system of linear equations is not indeed linearly independent. This implies that the 
columns of the matrix $$\mathbf{A} -\lambda \mathbf{I}$$ are linearly dependent, which in turn implies that the mapping 
is not bijective (does not have an inverse). As we have seen in the previous section, matrices that are not invertible 
have the determinant zero, and using this property, we can search for non-trivial solutions. Thus, we can start solving 
the problem by looking for values of $\lambda$ that satisfy the following equation:

$$\left| \mathbf{A} -\lambda \mathbf{I}\right| = 0.$$

{: .summary}
In this chapter, we explored eigensystems, which involve finding eigenvectors and eigenvalues of a given matrix. Eigenvectors are vectors that remain in the same direction but can be rescaled when a transformation is applied. Eigenvectors and eigenvalues have many applications in mathematics, including matrix diagonalizations Markov chains, and image compression. 

[^1]: The equations of a linear system are independent if none of the equations can be derived algebraically from the others. In other words, we cannot write one equation as a linear combination of other equations.