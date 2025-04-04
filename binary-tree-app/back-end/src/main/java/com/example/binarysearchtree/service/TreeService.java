package com.example.binarysearchtree.service;

import com.example.binarysearchtree.model.TreeNode;
import org.springframework.stereotype.Service;

@Service
public class TreeService {
    public TreeNode insert(TreeNode root, int value) {
        if (root == null) return new TreeNode(value);
        if (value < root.value) root.left = insert(root.left, value);
        else root.right = insert(root.right, value);
        return root;
    }

    public TreeNode buildTree(int[] numbers) {
        TreeNode root = null;
        for (int num : numbers) {
            root = insert(root, num);
        }
        return root;
    }
}
