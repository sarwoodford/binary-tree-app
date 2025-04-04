package com.example.binarysearchtree;

import com.example.binarysearchtree.entity.TreeEntity;
import com.example.binarysearchtree.model.TreeNode;
import com.example.binarysearchtree.repository.TreeRepository;
import com.example.binarysearchtree.service.TreeService;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class TreeController {

    @Autowired
    private TreeService treeService;

    @Autowired
    private TreeRepository treeRepository;

    @PostMapping("/process-numbers")
    public TreeNode processNumbers(@RequestBody List<Integer> numbers) throws Exception {
        TreeNode root = treeService.buildTree(numbers.stream().mapToInt(i -> i).toArray());
        ObjectMapper mapper = new ObjectMapper();
        String json = mapper.writeValueAsString(root);

        TreeEntity entity = new TreeEntity();
        entity.setNumbers(numbers.toString());
        entity.setTreeJson(json);
        treeRepository.save(entity);

        return root;
    }

    @GetMapping("/previous-trees")
    public List<TreeEntity> getPreviousTrees() {
        return treeRepository.findAll();
    }
}
