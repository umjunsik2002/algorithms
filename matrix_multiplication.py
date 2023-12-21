import numpy as np

A = np.random.randint(0, 10, (8, 8))
B = np.random.randint(0, 10, (8, 8))
C = np.dot(A, B)
print(C, '\n')


def matrix_multiply(A, B):
    if A.shape[1] != B.shape[0]:
        raise ValueError("Invalid matrix multiplication operation")
    n = A.shape[0]
    m = A.shape[1] # A.shape[1] = B.shape[0]
    p = B.shape[1]
    C = np.zeros((n, p), dtype=int)
    
    for i in range(n):
        for j in range(p):
            for k in range(m):
                C[i][j] += A[i][k] * B[k][j]

    return C
    
C = matrix_multiply(A, B)
print(C, '\n')


def split_matrix(matrix):
    row, col = matrix.shape
    row2, col2 = row // 2, col // 2
    a = matrix[:row2, :col2]
    b = matrix[:row2, col2:]
    c = matrix[row2:, :col2]
    d = matrix[row2:, col2:]
    return a, b, c, d

def strassen_multiply(A, B):
    if A.shape[1] != B.shape[0]:
        raise ValueError("Invalid matrix multiplication operation")
    if A.shape[0] == 1:
        return np.dot(A, B)
    a, b, c, d = split_matrix(A)
    e, f, g, h = split_matrix(B)

    p1 = strassen_multiply(a, f - h)
    p2 = strassen_multiply(a + b, h)
    p3 = strassen_multiply(c + d, e)
    p4 = strassen_multiply(d, g - e)
    p5 = strassen_multiply(a + d, e + h)
    p6 = strassen_multiply(b - d, g + h)
    p7 = strassen_multiply(a - c, e + f)

    C11 = p5 + p4 - p2 + p6
    C12 = p1 + p2
    C21 = p3 + p4
    C22 = p1 + p5 - p3 - p7

    C = np.vstack((np.hstack((C11, C12)), np.hstack((C21, C22))))
    return C

C = strassen_multiply(A, B)
print(C, '\n')
